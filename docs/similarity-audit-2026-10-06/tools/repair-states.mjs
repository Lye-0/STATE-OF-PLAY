import fs from 'node:fs';
import path from 'node:path';
import {chromium} from '../../../node_modules/playwright/index.mjs';
const dir=path.resolve('docs/similarity-audit-2026-10-06');
const inv=JSON.parse(fs.readFileSync(dir+'/inventory.json'));
const data=JSON.parse(fs.readFileSync(dir+'/states.json'));
const ids=new Set(data.rows.filter(r=>r.issue).map(r=>r.id));
const browser=await chromium.connectOverCDP(process.env.AUDIT_CDP);
const page=browser.contexts()[0].pages().find(p=>p.url().includes('127.0.0.1:5179'));
for(const cat of [...new Set(inv.parts.filter(p=>ids.has(p.id)).map(p=>p.category))]){
 await page.locator('[data-category="'+cat+'"]').click({force:true});await page.waitForFunction(()=>document.querySelector('#part-grid')?.getAttribute('aria-busy')==='false');
 for(const p of inv.parts.filter(p=>ids.has(p.id))){
  const stage=page.locator('[data-part="'+p.id+'"] .object-stage');await stage.scrollIntoViewIfNeeded();await stage.locator('label[data-choice-value]').first().click();await page.mouse.move(2,2);await page.waitForTimeout(700);
  const r=data.rows.find(r=>r.id===p.id);r.action='select-first';r.photo='photos/'+p.id+'--state.png';delete r.issue;
  await stage.screenshot({path:path.join(dir,r.photo),animations:'disabled'});
 }
}
fs.writeFileSync(dir+'/states.json',JSON.stringify(data,null,2));console.log('Repaired '+ids.size+' captures');await browser.close();
