import fs from 'node:fs';import path from 'node:path';import {chromium} from '../../../node_modules/playwright/index.mjs';
const dir=path.resolve('docs/similarity-audit-2026-10-06');const inv=JSON.parse(fs.readFileSync(dir+'/inventory.json'));const data=JSON.parse(fs.readFileSync(dir+'/states.json'));
const browser=await chromium.connectOverCDP(process.env.AUDIT_CDP);const page=browser.contexts()[0].pages().find(p=>p.url().includes('127.0.0.1:5179'));
for(const cat of (process.env.ONLY_HINTS?['hints']:['comboboxes','hints'])){
 await page.locator('[data-category="'+cat+'"]').click({force:true});await page.waitForFunction(()=>document.querySelector('#part-grid')?.getAttribute('aria-busy')==='false');
 for(const p of inv.parts.filter(p=>p.category===cat)){
  const stage=page.locator('[data-part="'+p.id+'"] .object-stage');await stage.scrollIntoViewIfNeeded();const trigger=stage.locator(cat==='comboboxes'?'[data-combo-toggle]':'[data-hint-trigger]');
  if(cat==='comboboxes')await trigger.click();else await page.mouse.move(2,2);
  await trigger.hover();await page.waitForTimeout(450);
  let panel=stage.locator(cat==='comboboxes'?'[role="listbox"]':'[data-hint-panel]').filter({visible:true}).first();
  if(!(await panel.count())&&cat==='comboboxes'){await stage.locator('[data-combo]').press('ArrowDown');await page.waitForTimeout(450);}
  if(!(await panel.count())&&cat==='hints'){await trigger.click();await page.waitForTimeout(450);}
  if(!(await panel.count()))throw new Error('Not expanded '+p.id);
  const row=data.rows.find(r=>r.id===p.id);row.action=cat==='comboboxes'?'open-options':'open / hover-trigger';row.expanded=true;await panel.screenshot({path:path.join(dir,row.photo),animations:'disabled'});
  await page.keyboard.press('Escape');await page.mouse.move(2,2);await page.waitForTimeout(350);
 }
 fs.writeFileSync(dir+'/states.json',JSON.stringify(data,null,2));console.log('Expanded '+cat);
}
fs.writeFileSync(dir+'/states.json',JSON.stringify(data,null,2));await browser.close();
