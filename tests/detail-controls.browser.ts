import {selectSetting} from './detail-settings.ts';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {chromium} from 'playwright';
import {createServer} from 'vite';
import {ROOT} from '../scripts/catalog.ts';
import {selectCategory,galleryReady} from './gallery-ready.ts';
const server=await createServer({root:ROOT,server:{host:'127.0.0.1',port:0}});await server.listen();
const browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{})});
const page=await browser.newPage({viewport:{width:1440,height:1000}});const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
const d=page.locator('#part-details');const out=ROOT+'/.test-output/detail-controls';fs.mkdirSync(out,{recursive:true});
async function open(category:string,id:string){await selectCategory(page,category);await page.locator(`[data-open="${id}"]`).click();await galleryReady(page);}
try{
 await page.goto(server.resolvedUrls!.local[0]);await page.waitForFunction(()=>document.documentElement.classList.contains('site-ready'));
 await open('blocks','paper-card');await d.locator('.appearance-color .appearance-trigger').first().click();
 const picker=d.locator('.appearance-color').first(),hex=picker.locator('[data-hex]');await hex.fill('#C65EAA');await hex.press('Enter');
 const old=await hex.inputValue();const ring=await picker.locator('.sg-hue-disc').boundingBox();assert.ok(ring);
 await page.mouse.click(ring.x+ring.width-8,ring.y+ring.height/2);assert.notEqual(await hex.inputValue(),old,'ring changes hue');
 const sv=await picker.locator('.sg-color-sv').boundingBox();assert.ok(sv);const beforeSV=await hex.inputValue();await page.mouse.move(sv.x+20,sv.y+20);await page.mouse.down();await page.mouse.move(sv.x+70,sv.y+70,{steps:5});await page.mouse.up();assert.notEqual(await hex.inputValue(),beforeSV,'SV drag changes color');
 const slider=picker.locator('[data-channel=h]');await slider.focus();await slider.press('Home');assert.equal(await slider.inputValue(),'0');await slider.press('ArrowRight');assert.ok(Number(await slider.inputValue())>0);
 await picker.locator('[data-swatch]').first().click();assert.equal((await hex.inputValue()).toUpperCase(),await picker.locator('[data-swatch]').first().getAttribute('data-swatch'));
 await hex.fill('invalid');await hex.press('Enter');assert.equal(await hex.getAttribute('aria-invalid'),'true');await picker.locator('[data-picker-close]').click();assert.ok(await picker.getAttribute('open')!==null);await hex.fill('#243A47');await hex.press('Enter');await picker.locator('[data-picker-close]').click();assert.equal(await picker.getAttribute('open'),null);
 await d.locator('.appearance-color .appearance-trigger').first().click();const panelBox=await picker.locator('.appearance-picker').boundingBox(),triggerBox=await picker.locator('.appearance-trigger').boundingBox();assert.ok(panelBox&&triggerBox&&panelBox.x>=triggerBox.x+triggerBox.width,'desktop popover is right of trigger');await page.screenshot({path:out+'/orbit-picker.png'});await page.keyboard.press('Escape');assert.ok(await d.isVisible());
 const exportCombo=d.locator('.layout-control [role=combobox]');await exportCombo.click();await d.locator('.layout-control [role=option][data-value=original]').click();assert.equal(await d.locator('#export-layout').inputValue(),'original');assert.match(await exportCombo.innerText(),/元の構成/);await d.locator('[data-format=js]').click();assert.match(await exportCombo.innerText(),/元の構成/);
 await d.locator('.close-detail').click();
 await open('badges','aurora-tags');const mode=d.locator('[data-sq-demo-mode] + .detail-select');await mode.locator('[role=combobox]').click();await mode.locator('[role=option][data-value=both]').click();assert.ok(await d.locator('.sq-chip input').count()>0);assert.ok(await d.locator('[data-tag-remove]').count()>0);await mode.locator('[role=combobox]').click();await page.waitForTimeout(260);assert.ok(Number(await mode.locator('.detail-select-popup').evaluate(el=>getComputedStyle(el).opacity))>.9);await page.screenshot({path:out+'/dropdown.png'});await mode.locator('[role=combobox]').press('Home');await mode.locator('[role=combobox]').press('Enter');assert.equal(await d.locator('[data-sq-demo-mode]').inputValue(),'display');assert.equal(await d.locator('.sq-chip input,.sq-chip button').count(),0);
 await d.locator('[data-foundation-reset]').click();assert.equal(await mode.locator('[role=combobox]').innerText(),await d.locator('[data-sq-demo-mode] option:checked').innerText());await d.locator('.close-detail').click();
 for(const [cat,id]of [['comboboxes','aurora-finder'],['radios','soft-choice']] as const){
  await open(cat,id);const button=d.locator('[data-change-items]');await button.click();assert.equal(await button.innerText(),'展示の候補に戻す');assert.match(await d.locator('.preview-stage').innerText(),/Draft/);assert.equal(await button.getAttribute('aria-pressed'),'true');await button.click();assert.equal(await button.innerText(),'別の候補を試す');assert.equal(await button.getAttribute('aria-pressed'),'false');await button.click();await d.locator('[data-foundation-reset]').click();assert.equal(await button.innerText(),'別の候補を試す');await d.locator('.close-detail').click();
 }
 for(const category of ['scrollbars','textboxes','datepickers','pagination','ratings','skeletons','wizards','segments','searchbars','navigation','tables']){
  await selectCategory(page,category);const id=await page.locator('[data-part]').first().getAttribute('data-part');assert.ok(id);await page.locator(`[data-open="${id}"]`).click();await galleryReady(page);
  const selects=d.locator('.preview-sidebar select');for(let i=0;i<await selects.count();i++){const model=selects.nth(i),original=await model.inputValue();const choices=await model.locator('option').evaluateAll(nodes=>nodes.map(n=>(n as HTMLOptionElement).value));const next=choices.find(value=>value!==original);if(next){await selectSetting(model,next);assert.equal(await model.inputValue(),next);await selectSetting(model,original);}}
  await d.locator('.close-detail').click();
 }
 await page.setViewportSize({width:390,height:844});await open('blocks','paper-card');await d.locator('.appearance-color .appearance-trigger').first().click();const mobilePanel=await picker.locator('.appearance-picker').boundingBox();assert.ok(mobilePanel&&mobilePanel.x>=0&&mobilePanel.x+mobilePanel.width<=390&&mobilePanel.y>=0&&mobilePanel.y+mobilePanel.height<=844,'mobile popover fits viewport');assert.equal(await d.evaluate(el=>el.scrollWidth>el.clientWidth),false);await page.screenshot({path:out+'/mobile.png'});await picker.locator('[data-picker-close]').click();const fileSelect=d.locator('.mobile-file-picker select');const filename=await fileSelect.locator('option').nth(1).getAttribute('value');assert.ok(filename);await selectSetting(fileSelect,filename);assert.equal(await d.locator('.current-file').innerText(),filename.split('/').at(-1));assert.deepEqual(errors,[]);console.log('PASS Orbit ring/SV/sliders/palette/HEX, custom dropdown mouse/keyboard/reset, alternate candidates, mobile and no browser errors');
}catch(error){await page.screenshot({path:out+'/failure.png'});console.error(await d.innerText());throw error;}finally{await browser.close();await server.close();}
