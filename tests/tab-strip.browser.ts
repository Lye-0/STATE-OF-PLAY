import {currentParts,galleryCount} from './gallery-counts.ts';
import {selectSetting} from './detail-settings.ts';
/** Real browser regression for transient tab scrollbars and exported source parity. */
import assert from 'node:assert/strict';
import {chromium} from 'playwright';
import {createServer} from 'vite';
import {ROOT,buildCatalog,FORMATS} from '../scripts/catalog.ts';
import {getDelivery,buildPrompt,buildUsage,packageContents} from '../src/catalog/delivery.ts';
import {readBrowserIndex} from '../scripts/vite-catalog.ts';
const ids=readBrowserIndex().index.filter(p=>p.category==='tabs'&&!p.tags.includes('GLASS LAB')).map(p=>p.id);
const {parts}=buildCatalog(ROOT,ids);
assert.equal(parts.length,ids.length);
assert.ok(parts.length>0);
const rule='overflow-y:hidden';
const scrollRule='scrollbar-color';
const promptRule='縦スクロールバーを出さず';
let checked=0;
for(const part of parts)for(const format of FORMATS)for(const layout of ['portable','original'] as const){
  const files=getDelivery(part,format,layout).files;
  const base=files.find(f=>f.sourceName==='src/shared/selection-base.css');
  assert.ok(base,`${part.id}/${format}/${layout}: source CSS exists`);
  assert.ok(base.code.includes(rule),`${part.id}/${format}/${layout}: source CSS`);
  assert.ok(base.code.includes(scrollRule)&&base.code.includes('data-tab-overflow=false'));
  const own=files.find(f=>f.sourceName?.endsWith('/'+part.id+'/styles.css'));
  assert.ok(own?.code.includes('--tab-scroll-thumb:'),part.id);
  const indicator=files.find(f=>f.sourceName==='src/shared/selection-indicator.ts');
  assert.ok(indicator?.code.includes('tabOverflow'),part.id);
  for(const includeCode of [true,false]){
    const prompt=buildPrompt(part,format,layout,includeCode);
    assert.ok(prompt.includes(promptRule),`${part.id}/${format}/${layout}: generated prompt`);
    const zip=packageContents(part,format,layout,includeCode);
    assert.equal(zip.find(f=>f.name==='PROMPT.md')?.code,prompt);
    assert.ok(zip.find(f=>f.name==='README.md')?.code.includes(promptRule));
    assert.equal(zip.find(f=>f.name===base.name)?.code,base.code);
  }
  checked++;
}
console.log(`PASS ${checked} source packages and both prompt modes use updated tab CSS`);
const server=await createServer({root:ROOT,server:{host:'127.0.0.1',port:0}});await server.listen();
const browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{})});
try {
  for(const width of [1440,390]){
    const page=await browser.newPage({viewport:{width,height:960}});
    const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
    await page.goto(server.resolvedUrls!.local[0],{waitUntil:'commit',timeout:120000});
    await page.waitForFunction(()=>document.documentElement.classList.contains('site-ready'),undefined,{timeout:120000});
    await page.locator('[data-category="tabs"]').click();
    await page.waitForFunction(expected=>document.querySelector('#part-grid')?.getAttribute('aria-busy')==='false'&&document.querySelectorAll('#part-grid [data-part]').length===expected,currentParts().filter(part=>part.category==='tabs').length);
    assert.equal(await page.locator('[data-part]').count(),await galleryCount(page));
    for(const part of parts){
      const card=page.locator(`[data-part="${part.id}"]`),list=card.locator('.sop-choice-list');
      const vertical=(await card.locator('.sop-tabs').getAttribute('data-orientation'))==='vertical';
      const expected=vertical?'visible':'hidden';
      for(const n of [1,2,0]){
        await card.locator('.sop-choice-item').nth(n).click();
        for(const delay of [0,130,280]){
          if(delay)await page.waitForTimeout(delay===130?130:150);
          const overflow=await list.evaluate(el=>getComputedStyle(el).overflowY);
          assert.equal(overflow,expected,`${part.id} at ${width}px during selection`);
        }
        assert.equal(await card.locator('.sop-choice-panel:visible').count(),1);
        if(!vertical){assert.equal(await card.locator('.sop-tabs').getAttribute('data-tab-overflow'),'false',part.id);assert.equal(await list.evaluate(el=>getComputedStyle(el).overflowX),'hidden',part.id);}
      }
    }
    await page.locator('[data-open="folio-tabs"]').click();
    await page.locator('#part-details [data-preview-part="folio-tabs"]').waitFor();
    const details=page.locator('#part-details');
    await details.locator('#tab-prompt').click();
    assert.ok((await details.locator('#prompt-text').inputValue()).includes(promptRule));
    await details.locator('[data-prompt-mode="spec"]').click();
    assert.ok((await details.locator('#prompt-text').inputValue()).includes(promptRule));
    await details.locator('#tab-code').click();
    if(width<600){
      const file=await details.locator('[data-file*="selection-base.css"]').first().getAttribute('data-file');
      await selectSetting(details.locator('.mobile-file-picker select'),file!);
    }else await details.locator('[data-file*="selection-base.css"]').first().click();
    assert.ok((await details.locator('.editor').innerText()).includes(rule));
    await details.locator('[data-selection-count="7"]').click();
    const detailList=details.locator('.preview-stage .sop-choice-list');
    await details.locator('.preview-stage .sop-choice-item').last().click();
    assert.ok(await detailList.evaluate(el=>el.scrollWidth>el.clientWidth),'long horizontal tab list still scrolls');
    assert.ok(await detailList.evaluate(el=>el.scrollLeft>0),'selected tab remains horizontally reachable');
    assert.equal(await details.locator('.preview-stage .sop-tabs').getAttribute('data-tab-overflow'),'true');
    assert.ok(await detailList.evaluate(el=>getComputedStyle(el).scrollbarColor!=='auto'));
    assert.equal(await detailList.evaluate(el=>getComputedStyle(el,'::-webkit-scrollbar-button').display),'none');
    await selectSetting(details.locator('[data-selection-axis]'),'vertical');
    assert.equal(await detailList.evaluate(el=>getComputedStyle(el).overflowY),'visible');
    await selectSetting(details.locator('[data-selection-axis]'),'horizontal');
    await details.locator('[data-selection-count="3"]').click();
    assert.equal(await details.locator('.preview-stage .sop-tabs').getAttribute('data-tab-overflow'),'false');
    assert.equal(await detailList.evaluate(el=>getComputedStyle(el).overflowX),'hidden');
    assert.equal(await detailList.evaluate(el=>el.scrollLeft),0);
    await details.locator('.close-detail').click();await details.waitFor({state:'hidden'});
    if(width===1440)for(const part of parts){
      await page.locator(`[data-open="${part.id}"]`).click();
      await details.locator(`[data-preview-part="${part.id}"]`).waitFor();
      const root=details.locator('.preview-stage .sop-tabs');
      if(await root.getAttribute('data-orientation')==='vertical')await selectSetting(details.locator('[data-selection-axis]'),'horizontal');
      await details.locator('[data-selection-count="7"]').click();
      await page.waitForFunction(()=>document.querySelector('#part-details .preview-stage .sop-tabs')?.getAttribute('data-tab-overflow')==='true');
      const styled=await root.locator('.sop-choice-list').evaluate(list=>({overflow:list.scrollWidth>list.clientWidth,color:getComputedStyle(list).scrollbarColor,button:getComputedStyle(list,'::-webkit-scrollbar-button').display,thumb:getComputedStyle(list,'::-webkit-scrollbar-thumb').backgroundColor,token:getComputedStyle(list).getPropertyValue('--tab-scroll-thumb').trim()}));
      assert.ok(styled.overflow,part.id);assert.notEqual(styled.color,'auto',part.id);assert.equal(styled.button,'none',part.id);assert.ok(styled.token&&styled.thumb,part.id);
      await details.locator('.close-detail').click();await details.waitFor({state:'hidden'});
    }
    assert.deepEqual(errors,[]);
    console.log(`PASS ${width}px: all ${parts.length} tab parts keep vertical scrollbar hidden during switching; inspector/code/prompt work`);
    await page.close();
  }
}finally{await browser.close();await server.close();}
