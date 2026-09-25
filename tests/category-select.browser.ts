/** The site category jump reuses the shipped Aurora Select implementation. */
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {chromium} from 'playwright';
import {createServer} from 'vite';
import {ROOT} from '../scripts/catalog.ts';
import {categories} from '../src/catalog/categories.ts';
import {galleryReady,selectCategory,selectedCategory} from './gallery-ready.ts';
const out=path.join(ROOT,'.test-output/category-select');fs.mkdirSync(out,{recursive:true});
const server=await createServer({root:ROOT,server:{host:'127.0.0.1',port:0}});await server.listen();
const browser=await chromium.launch({headless:true,args:['--no-sandbox'],...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{})});
try{
 const page=await browser.newPage({viewport:{width:1280,height:900}});page.setDefaultTimeout(30000);const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto(server.resolvedUrls!.local[0],{waitUntil:'domcontentloaded',timeout:60000});await galleryReady(page);
 const root=page.locator('#category-jump'),trigger=root.locator('.sop-select-trigger'),popup=root.locator('.sop-select-popup'),options=popup.locator('[role=option]');
 assert.equal(await page.locator('.collection-toolbar .category-jump #category-jump').count(),1);
 assert.equal(await page.locator('#search-parts,#search-clear').count(),0);
 assert.equal(await root.locator('.sop-select-caption').count(),0);
 assert.equal(await root.locator('#category-jump-caption').getAttribute('class'),'sr-only');
 assert.ok(await root.evaluate(el=>el.classList.contains('sop-select-sculpted')&&el.classList.contains('sop-aurora-select')));assert.equal(await trigger.getAttribute('role'),'combobox');assert.equal(await root.getAttribute('data-value'),'toggles');assert.equal(await options.count(),categories.length);assert.equal(await root.locator('[data-value="toggles"]').getAttribute('aria-selected'),'true');
 const shape=await trigger.evaluate(el=>{const root=el.closest('.sop-select')!;const style=getComputedStyle(root),rect=el.getBoundingClientRect();return{height:getComputedStyle(el).minHeight,radius:getComputedStyle(el).borderRadius,width:rect.width,accent:style.getPropertyValue('--sel-accent').trim(),base:style.getPropertyValue('--sel-bg').trim(),siteAccent:getComputedStyle(document.documentElement).getPropertyValue('--lime').trim()};});
 assert.equal(shape.height,'46px');assert.ok(shape.width>=220&&shape.width<=280);assert.notEqual(shape.radius,'7px');assert.equal(shape.accent,shape.siteAccent);assert.equal(shape.base,'#1a1f19');
 await trigger.focus();await trigger.press('End');assert.equal(await trigger.getAttribute('aria-expanded'),'true');assert.equal(await trigger.getAttribute('aria-activedescendant'),await options.last().getAttribute('id'));assert.equal(await root.getAttribute('data-value'),'toggles');await trigger.press('Escape');assert.equal(await trigger.getAttribute('aria-expanded'),'false');assert.equal(await selectedCategory(page),'toggles');
 await selectCategory(page,'progress');assert.equal(await selectedCategory(page),'progress');assert.equal(await page.locator('[data-category="progress"]').getAttribute('aria-selected'),'true');assert.equal(await page.locator('[data-part]').count(),26);assert.match(await trigger.innerText(),/進捗表示/);assert.match(await trigger.innerText(),/26 PARTS/);
 await page.locator('[data-category="numbers"]').click();await galleryReady(page);assert.equal(await selectedCategory(page),'numbers');assert.match(await trigger.innerText(),/数値入力/);
 await page.locator('.collection-toolbar').screenshot({path:path.join(out,'desktop-toolbar.png')});
 await page.setViewportSize({width:390,height:844});await trigger.click();const rect=await popup.boundingBox();assert.ok(rect&&rect.x>=0&&rect.x+rect.width<=390);await page.waitForTimeout(300);assert.equal(await trigger.getAttribute('aria-expanded'),'true');assert.ok(await options.first().isVisible());await page.screenshot({path:path.join(out,'mobile-open.png')});await page.keyboard.press('Escape');
 const oldLink=await browser.newPage();await oldLink.goto(new URL('?q=zz-missing-part',server.resolvedUrls!.local[0]).href,{waitUntil:'domcontentloaded',timeout:60000});await galleryReady(oldLink);assert.equal(await oldLink.locator('[data-part]').count(),26);assert.equal(await oldLink.locator('#search-parts').count(),0);await oldLink.close();assert.deepEqual(errors,[]);
 console.log('Category selector checks: toolbar placement, site palette, compact size, '+categories.length+' options, keyboard, category sync and mobile bounds passed.');
}finally{await browser.close();await server.close();}
