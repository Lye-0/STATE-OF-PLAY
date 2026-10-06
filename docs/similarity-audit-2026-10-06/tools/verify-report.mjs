import fs from 'node:fs';import path from 'node:path';import {pathToFileURL} from 'node:url';import {chromium} from '../../../node_modules/playwright/index.mjs';
const dir=path.resolve('docs/similarity-audit-2026-10-06');
const inv=JSON.parse(fs.readFileSync(dir+'/inventory.json'));const f=JSON.parse(fs.readFileSync(dir+'/findings.json'));const s=JSON.parse(fs.readFileSync(dir+'/states.json'));
for(const p of inv.parts)if(!fs.existsSync(path.join(dir,p.photo)))throw Error('Missing photo '+p.id);
for(const g of f.groups){if(!fs.existsSync(dir+'/comparisons/'+g.id+'.jpg'))throw Error('Missing comparison '+g.id);if(g.ids.some(id=>/^lgc?-/.test(id)))throw Error('Liquid glass included');}
for(const r of s.rows)if(r.issue||!r.photo||!fs.existsSync(path.join(dir,r.photo)))throw Error('Incomplete state '+r.id);
const browser=await chromium.connectOverCDP(process.env.AUDIT_CDP);const page=await browser.contexts()[0].newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
await page.setViewportSize({width:1440,height:1000});await page.goto(pathToFileURL(dir+'/index.html').href);
if(await page.locator('section').count()!==f.groups.length)throw Error('Wrong group count');
await page.locator('#cat').selectOption('segments');if(await page.locator('section:not(.hidden)').count()!==4)throw Error('Category filter');
await page.screenshot({path:dir+'/sheets/report-desktop.png'});
await page.locator('#cat').selectOption('');await page.locator('#search').fill('aurora-loader');if(await page.locator('section:not(.hidden)').count()!==1)throw Error('Search');
await page.locator('#search').fill('');await page.locator('#priority').selectOption('中');if(await page.locator('section:not(.hidden)').count()!==f.groups.filter(g=>g.priority==='中').length)throw Error('Priority filter');
await page.locator('#priority').selectOption('');await page.locator('#states').click();if(!(await page.locator('body').evaluate(e=>e.classList.contains('show-state'))))throw Error('State toggle');await page.locator('#states').click();
await page.setViewportSize({width:390,height:844});await page.locator('#cat').selectOption('segments');if(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth))throw Error('Mobile overflow');await page.locator('#G16').evaluate(e=>scrollTo(0,e.offsetTop-225));await page.waitForTimeout(150);await page.screenshot({path:dir+'/sheets/report-mobile.png'});
await page.setViewportSize({width:1440,height:1000});await page.locator('#cat').selectOption('');await page.evaluate(()=>scrollTo(0,0));
if(errors.length)throw Error(errors.join('\n'));
const result={normalPhotos:inv.parts.length,operatedPhotos:s.rows.length,groups:f.groups.length,comparisonPhotos:f.groups.length,priorityHighRemovals:f.groups.filter(g=>g.priority==='高').flatMap(g=>g.remove).length,priorityMediumRemovals:f.groups.filter(g=>g.priority==='中').flatMap(g=>g.remove).length,pageErrors:errors,checks:['all-photo-paths','no-liquid-glass-candidates','all-state-captures-complete','category-filter','name-search','priority-filter','state-toggle','mobile-no-overflow','offline-file-display']};
fs.writeFileSync(dir+'/verification.json',JSON.stringify(result,null,2));console.log(result);await browser.close();
