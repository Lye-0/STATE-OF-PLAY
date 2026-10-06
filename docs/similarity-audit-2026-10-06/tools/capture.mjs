import fs from 'node:fs';
import path from 'node:path';
import {chromium} from '../../../node_modules/playwright/index.mjs';

const dir=path.resolve('docs/similarity-audit-2026-10-06');
const registry=JSON.parse(fs.readFileSync('src/catalog/registry.json','utf8'));
const parts=registry.map(base=>({...JSON.parse(fs.readFileSync(base+'/meta.json','utf8')),base}));
const selected=parts.filter(p=>!/^lgc?-/.test(p.id));
const browser=await chromium.connectOverCDP(process.env.AUDIT_CDP);
const context=browser.contexts()[0];
const page=context.pages().find(p=>p.url().includes('127.0.0.1:5179'));
if(!page)throw new Error('Verified gallery tab missing');
await page.setViewportSize({width:1600,height:1100});
page.setDefaultTimeout(15000);
const errors=[];page.on('pageerror',e=>errors.push(e.message));
const inventory=[];
async function ready(){await page.waitForFunction(()=>document.querySelector('#part-grid')?.getAttribute('aria-busy')==='false',{timeout:120000});}
for(const category of [...new Set(selected.map(p=>p.category))]){
 await page.locator('[data-category="'+category+'"]').click({force:true});await ready();
 const group=selected.filter(p=>p.category===category);
 for(const part of group){
  const stage=page.locator('[data-part="'+part.id+'"] .object-stage');
  await stage.scrollIntoViewIfNeeded();
  await page.mouse.move(2,2);
  await page.waitForTimeout(65);
  const box=await stage.boundingBox();
  if(!box||box.width<2||box.height<2)throw new Error('Empty stage '+part.id);
  const file='photos/'+part.id+'.png';
  await page.screenshot({path:path.join(dir,file),clip:{x:Math.max(0,box.x),y:Math.max(0,box.y),width:box.width,height:box.height},animations:'disabled'});
  inventory.push({...part,photo:file,width:box.width,height:box.height});
 }
 fs.writeFileSync(path.join(dir,'inventory.json'),JSON.stringify({capturedAt:new Date().toISOString(),head:'84472086',viewport:{width:1600,height:1100},excluded:parts.filter(p=>/^lgc?-/.test(p.id)).map(p=>p.id),parts:inventory,errors},null,2));
 console.log(category+': '+group.length+' captured, total '+inventory.length+'/'+selected.length);
}
console.log('DONE '+inventory.length+' parts; page errors '+errors.length);
// Disconnect from the agent-browser owned browser; its lifecycle remains with the CLI.
await browser.close();
