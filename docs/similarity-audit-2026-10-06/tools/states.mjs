import fs from 'node:fs';
import path from 'node:path';
import {chromium} from '../../../node_modules/playwright/index.mjs';
const dir=path.resolve('docs/similarity-audit-2026-10-06');
const inv=JSON.parse(fs.readFileSync(dir+'/inventory.json'));
const findings=JSON.parse(fs.readFileSync(dir+'/findings.json'));
const ids=new Set(findings.groups.flatMap(g=>g.ids));
const expandedCats=['dropdowns','comboboxes','hints','datepickers','commands','contextmenus','popups'];
const parts=inv.parts.filter(p=>ids.has(p.id)||expandedCats.includes(p.category));
const browser=await chromium.connectOverCDP(process.env.AUDIT_CDP);
const page=browser.contexts()[0].pages().find(p=>p.url().includes('127.0.0.1:5179'));
page.setDefaultTimeout(2500);await page.setViewportSize({width:1600,height:1100});
const rows=[];const errors=[];page.on('pageerror',e=>errors.push(e.message));
const selectors={popups:'[data-popup-open]',commands:'.wb-command-launch',contextmenus:'.wb-context-open',datepickers:'[data-calendar-toggle]',hints:'[data-hint-trigger]',comboboxes:'[role="combobox"]',dropdowns:'[aria-haspopup="listbox"], [aria-haspopup="menu"], button'};
const panels={popups:'dialog[open]',commands:'dialog[open]',contextmenus:'.wb-context-panel',datepickers:'[data-calendar]',hints:'[data-hint-panel]',comboboxes:'[role="listbox"]',dropdowns:'[role="listbox"], [role="menu"]'};
for(const cat of [...new Set(parts.map(p=>p.category))]){
 await page.keyboard.press('Escape');
 await page.locator('[data-category="'+cat+'"]').click({force:true});
 await page.waitForFunction(()=>document.querySelector('#part-grid')?.getAttribute('aria-busy')==='false');
 for(const p of parts.filter(p=>p.category===cat)){
  const stage=page.locator('[data-part="'+p.id+'"] .object-stage');
  await stage.scrollIntoViewIfNeeded();await page.mouse.move(2,2);
  const row={id:p.id,category:cat,action:'hover',photo:'photos/'+p.id+'--state.png'};
  try{
   if(selectors[cat]){const trigger=stage.locator(selectors[cat]).filter({visible:true}).first();await trigger.click();row.action='open';}
   else if(['tabs','segments'].includes(cat)){await stage.locator('[role="tab"], [role="radio"],button').filter({visible:true}).nth(1).click();row.action='select-second';}
   else if(['checkboxes','radios'].includes(cat)){await stage.locator('label').filter({visible:true}).first().click();row.action='select';}
   else if(cat==='scrollbars'){await stage.hover();await page.mouse.wheel(0,180);row.action='scroll';}
   else {await stage.hover();}
   await page.waitForTimeout(260);
   let target=stage;
   if(panels[cat]){const panel=stage.locator(panels[cat]).filter({visible:true}).first();if(await panel.count())target=panel;}
   await target.screenshot({path:path.join(dir,row.photo),animations:'disabled',timeout:5000});
  }catch(e){row.issue=e.message.split('\n')[0];row.photo=null;}
  row.animations=await stage.evaluate(el=>[...el.querySelectorAll('*')].flatMap(n=>{const c=getComputedStyle(n);return c.animationName==='none'?[]:[{element:n.tagName+'.'+n.className,name:c.animationName,duration:c.animationDuration,timing:c.animationTimingFunction}]}));
  rows.push(row);await page.keyboard.press('Escape');await page.mouse.move(2,2);await page.waitForTimeout(50);
 }
 fs.writeFileSync(dir+'/states.json',JSON.stringify({rows,errors},null,2));console.log(cat+': '+rows.length+'/'+parts.length);
}
await browser.close();
