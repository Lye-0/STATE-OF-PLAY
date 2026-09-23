/** Real browser regression for transient tab scrollbars and exported source parity. */
import assert from 'node:assert/strict';
import {chromium} from 'playwright';
import {createServer} from 'vite';
import {ROOT,buildCatalog,FORMATS} from '../scripts/catalog.ts';
import {getDelivery,buildPrompt,buildUsage,packageContents} from '../src/catalog/delivery.ts';
import {readBrowserIndex} from '../scripts/vite-catalog.ts';
const ids=readBrowserIndex().index.filter(p=>p.category==='tabs').map(p=>p.id);
const {parts}=buildCatalog(ROOT,ids);
assert.equal(parts.length,24);
const rule='overflow-y:hidden';
const promptRule='縦スクロールバーを出さず';
let checked=0;
for(const part of parts)for(const format of FORMATS)for(const layout of ['portable','original'] as const){
  const files=getDelivery(part,format,layout).files;
  const base=files.find(f=>f.sourceName==='src/shared/selection-base.css');
  assert.ok(base,`${part.id}/${format}/${layout}: source CSS exists`);
  assert.ok(base.code.includes(rule),`${part.id}/${format}/${layout}: source CSS`);
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
    await page.goto(server.resolvedUrls!.local[0]);
    await page.locator('[data-category="tabs"]').click();
    await page.waitForFunction(()=>document.querySelector('#part-grid')?.getAttribute('aria-busy')==='false');
    assert.equal(await page.locator('[data-part]').count(),24);
    for(const part of parts){
      const card=page.locator(`[data-part="${part.id}"]`),list=card.locator('.sop-choice-list');
      const expected=(await card.locator('.sop-tabs').getAttribute('data-orientation'))==='vertical'||part.id==='ribbon-tabs'?'visible':'hidden';
      for(const n of [1,2,0]){
        await card.locator('.sop-choice-item').nth(n).click();
        for(const delay of [0,130,280]){
          if(delay)await page.waitForTimeout(delay===130?130:150);
          const overflow=await list.evaluate(el=>getComputedStyle(el).overflowY);
          assert.equal(overflow,expected,`${part.id} at ${width}px during selection`);
        }
        assert.equal(await card.locator('.sop-choice-panel:visible').count(),1);
      }
    }
    await page.locator('[data-open="atlas-tabs"]').click();
    await page.locator('#part-details [data-preview-part="atlas-tabs"]').waitFor();
    const details=page.locator('#part-details');
    await details.locator('#tab-prompt').click();
    assert.ok((await details.locator('#prompt-text').inputValue()).includes(promptRule));
    await details.locator('[data-prompt-mode="spec"]').click();
    assert.ok((await details.locator('#prompt-text').inputValue()).includes(promptRule));
    await details.locator('#tab-code').click();
    if(width<600){
      const file=await details.locator('[data-file*="selection-base.css"]').first().getAttribute('data-file');
      await details.locator('.mobile-file-picker select').selectOption(file!);
    }else await details.locator('[data-file*="selection-base.css"]').first().click();
    assert.ok((await details.locator('.editor').innerText()).includes(rule));
    await details.locator('[data-selection-count="7"]').click();
    const detailList=details.locator('.preview-stage .sop-choice-list');
    await details.locator('.preview-stage .sop-choice-item').last().click();
    assert.ok(await detailList.evaluate(el=>el.scrollWidth>el.clientWidth),'long horizontal tab list still scrolls');
    assert.ok(await detailList.evaluate(el=>el.scrollLeft>0),'selected tab remains horizontally reachable');
    await details.locator('[data-selection-axis]').selectOption('vertical');
    assert.equal(await detailList.evaluate(el=>getComputedStyle(el).overflowY),'visible');
    await details.locator('.close-detail').click();
    assert.deepEqual(errors,[]);
    console.log(`PASS ${width}px: all 24 tab parts keep vertical scrollbar hidden during switching; inspector/code/prompt work`);
    await page.close();
  }
}finally{await browser.close();await server.close();}
