/** Full collection integration through the production Vite preview. */
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {createRequire} from 'node:module';
import type {Browser} from 'playwright';
import {ROOT,buildCatalog} from '../scripts/catalog.ts';
import {getDelivery,buildPrompt} from '../src/catalog/delivery.ts';
import {galleryReady,selectCategory} from './gallery-ready.ts';

const require=createRequire(import.meta.url),{chromium}=require(process.env.PLAYWRIGHT_PATH??'playwright') as typeof import('playwright');
const all=buildCatalog(),glass=all.parts.filter(p=>p.id.startsWith('lg-')||p.id.startsWith('lgc-'));
const out=path.join(ROOT,'.test-output/glass-collection-gallery');fs.mkdirSync(out,{recursive:true});
const tests:string[]=[],errors:string[]=[];let browser:Browser|undefined,close:(()=>Promise<void>)|undefined;
async function run(name:string,fn:()=>Promise<void>){await fn();tests.push(name);console.log('PASS '+name);}
try{
 const {preview}=await import('vite'),server=await preview({root:ROOT,base:'/STATE-OF-PLAY/',preview:{host:'127.0.0.1',port:0}});
 close=()=>new Promise<void>((resolve,reject)=>server.httpServer.close(error=>error?reject(error):resolve()));
 browser=await chromium.launch({headless:true,args:['--no-sandbox'],...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{})});
 const page=await browser.newPage({viewport:{width:1440,height:960}});page.setDefaultTimeout(180000);page.on('pageerror',error=>errors.push(error.message));
 await page.goto(server.resolvedUrls!.local[0],{waitUntil:'commit',timeout:180000});
 await page.waitForFunction(()=>document.documentElement.classList.contains('site-ready'));
 const detail=page.locator('#part-details');
 const open=async(id:string)=>{const part=glass.find(p=>p.id===id)!;await selectCategory(page,part.category);await page.locator(`[data-open="${id}"]`).click();await galleryReady(page,true);return part;};
 const closeDetail=async()=>{await detail.locator('.close-detail').click();};
 await run('Glass A and B appear in their 35 ordinary categories',async()=>{
  assert.equal(all.parts.length,887);assert.equal(glass.length,70);assert.equal(await page.locator('.liquid-glass-shortcut,.lg-preview-controls').count(),0);
  for(const category of [...new Set(all.parts.map(p=>p.category))]){
   await selectCategory(page,category);const pair=glass.filter(p=>p.category===category),expectedCount=['loaders','ornaments'].includes(category)?0:2;assert.equal(pair.length,expectedCount);
   assert.equal(await page.locator('.glass-series').count(),expectedCount);
   assert.equal(await page.locator('.glass-series .lg-demo-host').count(),expectedCount);
   if(expectedCount)for(const type of ['A','B']as const){const expected=pair.find(p=>p.designType===type)!;assert.equal(await page.locator(`[data-part][data-design="${type}"]`).last().getAttribute('data-part'),expected.id);}
   const widths=await page.locator('.object-card').evaluateAll(cards=>cards.map(card=>{
    const mount=card.querySelector('.stage-mount')!;
    const root=mount.querySelector(':scope > :not(.lg-demo-scene)')!;
    return {glass:card.classList.contains('glass-series'),width:root.getBoundingClientRect().width};
   }));
   const ordinary=widths.filter(item=>!item.glass).map(item=>item.width).sort((a,b)=>a-b);
   const ordinaryMedian=ordinary[Math.floor(ordinary.length/2)];
   assert.ok(widths.filter(item=>item.glass).every(item=>item.width<=ordinaryMedian+24),`${category}: glass component wider than ordinary parts`);
   if(category==='accordions'||category==='tabs'||category==='segments'){
    await page.locator('.glass-series').first().screenshot({path:path.join(out,`${category}-width.png`)});
    await page.locator('.glass-series').last().screenshot({path:path.join(out,`${category}-width-b.png`)});
   }
  }
 });
 await run('Usual details and background picker work for old and new glass parts',async()=>{
  for(const id of ['lg-lens-toggle','lg-bloom-select','lgc-blocks-lens','lgc-scrollbars-lens','lgc-accordions-lens','lgc-textboxes-lens','lgc-tables-lens','lgc-badges-lens']){
   await open(id);assert.equal(await detail.locator('.lg-demo-host').count(),1,id);assert.equal(await detail.locator('.lg-preview-controls').count(),0,id);
   const seen=new Set<string>();for(const [button,scene] of [['studio','coast'],['dark','ink'],['light','paper']]as const){await detail.locator(`[data-bg="${button}"]`).click();assert.equal(await detail.locator('.lg-demo-host').getAttribute('data-lg-scene'),scene,id);assert.equal(await detail.locator('.live-preview').evaluate(el=>el.classList.contains('bg-studio')),true,id);seen.add(await detail.locator('.lg-demo-scene').evaluate(el=>getComputedStyle(el).backgroundColor));}assert.equal(seen.size,3,id);
   if(id==='lgc-tables-lens')await detail.locator('.live-preview').screenshot({path:path.join(out,'table-paper.png')});
   await closeDetail();
  }
 });
 await run('Both glass ledgers remain readable and operable at narrow widths',async()=>{
  await selectCategory(page,'tables');
  for(const id of ['lgc-tables-lens','lgc-tables-mist']){
   const card=page.locator(`[data-part="${id}"]`);await card.scrollIntoViewIfNeeded();
   const surface=await card.evaluate(el=>{
    const css=(selector:string)=>getComputedStyle(el.querySelector(selector)!);
    const frame=css('.wb-data-frame'),cell=css('tbody td[data-column="status"]'),heading=css('.wb-data-heading');
    const scroll=el.querySelector<HTMLElement>('.wb-table-scroll')!;
    return {frameBackground:frame.backgroundColor,frameBlur:frame.backdropFilter,headingBlur:heading.backdropFilter,cellBackground:cell.backgroundColor,cellColor:cell.color,scrollWidth:scroll.scrollWidth,clientWidth:scroll.clientWidth};
   });
   assert.ok(surface.scrollWidth>surface.clientWidth,`${id}: wide columns must remain scrollable`);
   assert.notEqual(surface.cellBackground,'rgb(250, 250, 247)',`${id}: copied white cells obscure text`);
   assert.equal(surface.cellColor,'rgb(241, 247, 251)',`${id}: cell text lost its readable ink`);
   if(id.endsWith('lens')){assert.equal(surface.frameBackground,'rgba(0, 0, 0, 0)');assert.match(surface.headingBlur,/blur/);}
   else {assert.match(surface.frameBackground,/rgba\(/);assert.match(surface.frameBlur,/blur/);}
   await card.locator('[data-sort="size"]').click();assert.equal(await card.locator('th[data-column="size"]').getAttribute('aria-sort'),'ascending');
   await card.locator('.wb-table-search input').fill('Design');assert.equal(await card.locator('tbody tr[data-row]').count(),1);
   await card.locator('[data-row-check]').check();assert.equal(await card.locator('.wb-data-selection').isVisible(),true);
   await card.locator('.wb-table-search input').fill('');await card.locator('[data-table-page="next"]').click();assert.equal(await card.locator('.wb-data-footer output').textContent(),'2 / 2');
   await card.locator('[data-table-page="prev"]').click();
   await card.locator('.wb-data-selection [data-table-clear]').click();
   await card.screenshot({path:path.join(out,`${id}-redesign.png`)});
  }
  for(const width of [320,390]){await page.setViewportSize({width,height:900});await selectCategory(page,'tables');for(const id of ['lgc-tables-lens','lgc-tables-mist']){
   const card=page.locator(`[data-part="${id}"]`);await card.scrollIntoViewIfNeeded();
   assert.ok(await card.evaluate(el=>{const scroll=el.querySelector<HTMLElement>('.wb-table-scroll')!;return scroll.scrollWidth>scroll.clientWidth&&scroll.getBoundingClientRect().right<=innerWidth+2;}),`${id}: horizontal table scroll missing at ${width}px`);
   assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+2),`${id}: page overflow at ${width}px`);
  }}
  await page.setViewportSize({width:1440,height:960});
  await open('lgc-tables-mist');await detail.locator('[data-bg="light"]').click();
  const lightCell=await detail.locator('td[data-column="status"]').first().evaluate(el=>{const style=getComputedStyle(el);return {background:style.backgroundColor,color:style.color};});
  assert.equal(lightCell.background,'rgba(246, 251, 254, 0.38)');assert.equal(lightCell.color,'rgb(23, 45, 61)');
  await closeDetail();
 });
 await run('Both glass segment markers glide between choices and respect reduced motion',async()=>{
  await page.emulateMedia({reducedMotion:'no-preference'});
  await selectCategory(page,'segments');
  for(const id of ['lgc-segments-lens','lgc-segments-mist']){
   const motion=await page.locator(`[data-part="${id}"] .sop-segments`).evaluate(async root=>{
    const marker=root.querySelector<HTMLElement>('.sop-choice-marker')!;
    const items=[...root.querySelectorAll<HTMLElement>('.sop-choice-item')];
    const before=marker.getBoundingClientRect().left;
    const target=items[2].getBoundingClientRect().left;
    items[2].querySelector<HTMLInputElement>('input')!.click();
    await new Promise(resolve=>setTimeout(resolve,80));
    const during=marker.getBoundingClientRect().left;
    await new Promise(resolve=>setTimeout(resolve,400));
    return {before,target,during,end:marker.getBoundingClientRect().left,property:getComputedStyle(marker).transitionProperty,value:root.dataset.value};
   });
   assert.ok(motion.property.split(',').map(s=>s.trim()).includes('transform'),`${id}: marker has no transform transition`);
   assert.ok(motion.during>motion.before+3&&motion.during<motion.target-3,`${id}: marker jumped instead of gliding`);
   assert.ok(Math.abs(motion.end-motion.target)<2,`${id}: marker missed target`);
   assert.equal(motion.value,'choice-3');
  }
  await page.emulateMedia({reducedMotion:'reduce'});
  for(const id of ['lgc-segments-lens','lgc-segments-mist'])assert.equal(await page.locator(`[data-part="${id}"] .sop-choice-marker`).evaluate(el=>getComputedStyle(el).transitionDuration),'0s');
  await page.emulateMedia({reducedMotion:'no-preference'});
 });
 await run('Both glass navigation markers reach each destination without overshoot',async()=>{
  await page.setViewportSize({width:1440,height:960});await page.emulateMedia({reducedMotion:'no-preference'});
  await selectCategory(page,'navigation');
  for(const id of ['lgc-navigation-lens','lgc-navigation-mist']){
   const card=page.locator(`[data-part="${id}"]`);await card.scrollIntoViewIfNeeded();
   const motion=await card.evaluate(async el=>{
    const nav=el.querySelector<HTMLElement>('.wb-nav-desktop')!,marker=nav.querySelector<HTMLElement>('.wb-nav-marker')!;
    const left=()=>marker.getBoundingClientRect().left-nav.getBoundingClientRect().left;
    const move=async(id:string)=>{
     const target=nav.querySelector<HTMLElement>(`[data-nav="${id}"]`)!,start=left(),destination=target.getBoundingClientRect().left-nav.getBoundingClientRect().left;
     target.addEventListener('click',event=>event.preventDefault(),{capture:true,once:true});target.click();
     const positions:number[]=[];for(let frame=0;frame<40;frame++){await new Promise<void>(resolve=>requestAnimationFrame(()=>resolve()));positions.push(left());}
     return {start,destination,minimum:Math.min(...positions),maximum:Math.max(...positions),end:positions.at(-1)!,radius:getComputedStyle(marker).borderRadius,linkRadius:getComputedStyle(target).borderRadius};
    };
    return [await move('projects'),await move('library'),await move('overview')];
   });
   for(const step of motion){
    assert.ok(step.minimum>=Math.min(step.start,step.destination)-.8&&step.maximum<=Math.max(step.start,step.destination)+.8,`${id}: marker passed its destination`);
    assert.ok(Math.abs(step.end-step.destination)<.8,`${id}: marker missed its destination`);
    assert.equal(step.radius,step.linkRadius,`${id}: marker and selection use different corners`);
   }
   if(id==='lgc-navigation-mist')await card.screenshot({path:path.join(out,'navigation-mist-corners.png')});
  }
  await page.emulateMedia({reducedMotion:'reduce'});
  for(const id of ['lgc-navigation-lens','lgc-navigation-mist'])assert.equal(await page.locator(`[data-part="${id}"] .wb-nav-marker`).evaluate(el=>getComputedStyle(el).transitionDuration),'0s');
  await page.emulateMedia({reducedMotion:'no-preference'});
 });
 await run('Both glass checkbox groups stay visually centered and clickable',async()=>{
  for(const width of [1440,390,320]){
   await page.setViewportSize({width,height:960});
   await selectCategory(page,'checkboxes');
   for(const id of ['lgc-checkboxes-lens','lgc-checkboxes-mist']){
    const card=page.locator(`[data-part="${id}"]`);
    const alignment=await card.evaluate(el=>{
     const scene=el.querySelector('.lg-demo-scene')!.getBoundingClientRect();
     const box=el.querySelector('.sop-check-box')!.getBoundingClientRect();
     const input=el.querySelector('input')!.getBoundingClientRect();
     const label=el.querySelector('.sop-check-label')!,description=el.querySelector('.sop-check-description')!;
     const a=document.createRange(),b=document.createRange();a.selectNodeContents(label);b.selectNodeContents(description);
     const visibleRight=Math.max(a.getBoundingClientRect().right,b.getBoundingClientRect().right);
     return {offset:(box.left+visibleRight)/2-(scene.left+scene.width/2),hitOffset:input.left-box.left};
    });
    assert.ok(Math.abs(alignment.offset)<8,`${id} ${width}: visible group is off center`);
    assert.ok(Math.abs(alignment.hitOffset)<2,`${id} ${width}: input hit area moved away from the box`);
    if(width===1440)await card.screenshot({path:path.join(out,`${id}-center.png`)});
    await open(id);
    const detailOffset=await detail.locator('.preview-stage').evaluate(el=>{
     const host=el.getBoundingClientRect(),box=el.querySelector('.sop-check-box')!.getBoundingClientRect();
     const label=el.querySelector('.sop-check-label')!,description=el.querySelector('.sop-check-description')!;
     const a=document.createRange(),b=document.createRange();a.selectNodeContents(label);b.selectNodeContents(description);
     return (box.left+Math.max(a.getBoundingClientRect().right,b.getBoundingClientRect().right))/2-(host.left+host.width/2);
    });
    assert.ok(Math.abs(detailOffset)<8,`${id} ${width}: detail group is off center`);
    const input=detail.locator('.sop-check input');
    await input.click();
    assert.equal(await input.isChecked(),id==='lgc-checkboxes-lens');
    await closeDetail();
   }
  }
  await page.setViewportSize({width:1440,height:960});
 });
 await run('Glass calendars align with neighboring cards and Mist selects one day',async()=>{
  await selectCategory(page,'datepickers');
  for(const [glassId,ordinaryId]of [['lgc-datepickers-lens','aperture-calendar'],['lgc-datepickers-mist','slate-calendar']]as const){
   const glassCard=page.locator(`[data-part="${glassId}"]`),ordinaryCard=page.locator(`[data-part="${ordinaryId}"]`);
   const [glassHeight,ordinaryHeight]=await Promise.all([glassCard.locator('.object-stage').evaluate(el=>el.getBoundingClientRect().height),ordinaryCard.locator('.object-stage').evaluate(el=>el.getBoundingClientRect().height)]);
   assert.ok(Math.abs(glassHeight-ordinaryHeight)<2,`${glassId}: card title is out of line`);
  }
  const lens=page.locator('[data-part="lgc-datepickers-lens"]');
  await lens.locator('[data-calendar-toggle]').click();
  const lensPanel=lens.locator('.ff-calendar');await lensPanel.waitFor({state:'visible'});
  const material=await lensPanel.evaluate(el=>{const style=getComputedStyle(el);return {background:style.backgroundColor,blur:style.backdropFilter};});
  const alpha=Number(material.background.match(/\/\s*([\d.]+)\)/)?.[1]??1);
  assert.ok(alpha>.3&&alpha<.65&&material.blur.includes('blur('),'Lens calendar panel lost its transparent material');
  await page.keyboard.press('Escape');
  const mist=page.locator('[data-part="lgc-datepickers-mist"]');
  assert.equal(await mist.locator('.lgc-root').getAttribute('data-date-mode'),'date');
  assert.equal(await mist.locator('[data-date="0"]').inputValue(),'2026-09-23');
  assert.equal(await mist.locator('[data-date="1"]').isVisible(),false);
  await mist.locator('[data-calendar-toggle]').click();
  const mistPanel=mist.locator('.ff-calendar');await mistPanel.waitFor({state:'visible'});
  await mistPanel.locator('[data-day="2026-09-25"]').click();
  assert.equal(await mist.locator('[data-date="0"]').inputValue(),'2026-09-25');
  assert.equal(await mist.locator('[data-date="1"]').isVisible(),false);
  await mistPanel.waitFor({state:'hidden'});
 });
 await run('Both glass pagers keep the selected number readable on a transparent lens',async()=>{
  await selectCategory(page,'pagination');
  const opacity=(color:string)=>color.startsWith('rgba(')?Number(color.match(/,\s*([\d.]+)\)/)?.[1]??1):color.startsWith('color(')?Number(color.match(/\/\s*([\d.]+)\)/)?.[1]??1):1;
  for(const [id,target]of [['lgc-pagination-lens','12'],['lgc-pagination-mist','5']]as const){
   const card=page.locator(`[data-part="${id}"]`),root=card.locator('.lgc-root'),rail=root.locator('.ff-pages');
   const style=()=>rail.evaluate(el=>{const rail=getComputedStyle(el),current=getComputedStyle(el.querySelector('[aria-current="page"]')!);return {rail:rail.backgroundColor,blur:rail.backdropFilter,number:current.color,lens:current.backgroundColor,reflection:current.boxShadow};});
   const initial=await style();
   assert.ok(opacity(initial.rail)<.6,`${id}: rail remains too opaque`);
   assert.ok(opacity(initial.lens)<.65,`${id}: selected page is painted solid`);
   assert.notEqual(initial.number,'rgba(0, 0, 0, 0)',`${id}: selected page number is transparent`);
   assert.ok(initial.blur.includes('blur(')&&initial.reflection!=='none',`${id}: selected page lost its glass material`);
   await rail.locator(`[aria-label="ページ ${target}"]`).click();
   const selected=rail.locator('[aria-current="page"]');
   assert.equal((await selected.innerText()).trim(),target.padStart(2,'0'));
   assert.notEqual(await selected.evaluate(el=>getComputedStyle(el).color),'rgba(0, 0, 0, 0)');
   await root.evaluate(el=>el.setAttribute('data-lg-material','solid'));
   await page.waitForTimeout(300);
   assert.equal(opacity((await style()).rail),1,`${id}: solid mode still shows through`);
   await root.evaluate(el=>el.removeAttribute('data-lg-material'));
  }
 });
 await run('Glass ratings use distinct translucent surfaces and keep selection readable',async()=>{
  for(const width of [1440,390,320]){
   await page.setViewportSize({width,height:960});await selectCategory(page,'ratings');
   for(const id of ['lgc-ratings-lens','lgc-ratings-mist']){
    const card=page.locator(`[data-part="${id}"]`);await card.scrollIntoViewIfNeeded();
    await card.locator('input[value="3"]').click();
    const surface=await card.evaluate(el=>{
     const field=getComputedStyle(el.querySelector('.sg-rating-field')!);
     const selected=getComputedStyle(el.querySelector('.sg-rating-unit:has(input:checked)')!);
     const material=el.dataset.part==='lgc-ratings-lens'
      ?getComputedStyle(el.querySelector('.sg-rating-unit')!,'::before')
      :field;
     return {field:field.backgroundColor,selected:selected.backgroundColor,blur:material.backdropFilter,overflow:document.documentElement.scrollWidth>innerWidth+2};
    });
    assert.equal(surface.overflow,false,`${id} ${width}: page overflows`);
    assert.equal(surface.selected,'rgba(0, 0, 0, 0)',`${id}: checked tile obscures the design`);
    if(id==='lgc-ratings-lens'){assert.equal(surface.field,'rgba(0, 0, 0, 0)',`${id}: field background covers the scene`);assert.ok(surface.blur.includes('blur('),`${id}: lenses lost their blur`);}
    else {assert.ok(surface.field.startsWith('rgba('),`${id}: solid panel returned`);assert.ok(surface.blur.includes('blur('),`${id}: frosted pane is missing`);}
    if(width===1440){
     await card.screenshot({path:path.join(out,`${id}-reframed.png`)});
     await card.locator('input[value="5"]').click();assert.equal(await card.locator('.sg-rating-output').textContent(),'5 / 5');
     await card.locator('.sg-rating-clear').click();assert.equal(await card.locator('.sg-rating-output').textContent(),'未評価');
    }
   }
  }
  await page.setViewportSize({width:1440,height:960});
 });
 await run('Frost Palette keeps its dark glass pane and readable controls',async()=>{
  for(const width of [1440,390,320]){
   await page.setViewportSize({width,height:960});await selectCategory(page,'colors');
   const card=page.locator('[data-part="lgc-colors-mist"]');await card.scrollIntoViewIfNeeded();
   const appearance=await card.evaluate(el=>{
    const panel=getComputedStyle(el.querySelector('.sg-color-panel')!);
    const heading=getComputedStyle(el.querySelector('.sg-color-heading .sg-label')!);
    const hex=getComputedStyle(el.querySelector('[data-hex]')!);
    return {panel:panel.backgroundColor,blur:panel.backdropFilter,heading:heading.color,hex:hex.color,overflow:document.documentElement.scrollWidth>innerWidth+2};
   });
   const rgb=appearance.panel.match(/[\d.]+/g)?.map(Number)??[];
   assert.ok(rgb[0]<80&&rgb[1]<100&&rgb[2]<120&&rgb[3]<.85,`Frost Palette ${width}: opaque light panel returned`);
   assert.ok(appearance.blur.includes('blur('),`Frost Palette ${width}: glass blur is missing`);
   assert.equal(appearance.heading,appearance.hex,`Frost Palette ${width}: heading and HEX ink diverge`);
   assert.equal(appearance.overflow,false,`Frost Palette ${width}: page overflows`);
   if(width===1440)await card.screenshot({path:path.join(out,'frost-palette-dark.png')});
  }
  await page.setViewportSize({width:1440,height:960});
 });
 await run('Both glass avatar layouts keep names and roles inside their controls',async()=>{
  for(const width of [1440,390,320]){
   await page.setViewportSize({width,height:960});await selectCategory(page,'avatars');
   for(const id of ['lgc-avatars-lens','lgc-avatars-mist']){
    const card=page.locator(`[data-part="${id}"]`);await card.scrollIntoViewIfNeeded();
    const contained=()=>card.evaluate(el=>[...el.querySelectorAll<HTMLElement>('.sg-person')].every(person=>{
     const bounds=person.getBoundingClientRect();
     return [...person.querySelectorAll<HTMLElement>('.sg-person-name,.sg-person-sub')].every(node=>{
      const range=document.createRange();range.selectNodeContents(node);const text=range.getBoundingClientRect();
      return text.left>=bounds.left-1&&text.right<=bounds.right+1&&text.top>=bounds.top-1&&text.bottom<=bounds.bottom+1;
     });
    }));
    assert.ok(await contained(),`${id} ${width}: label leaves its glass control`);
    const name=card.locator('.sg-person-name').first(),role=card.locator('.sg-person-sub').first();
    const originalName=await name.textContent(),originalRole=await role.textContent();
    await name.evaluate(el=>el.textContent='Alexandria Montgomery');await role.evaluate(el=>el.textContent='Senior Engineering Platform');
    assert.ok(await contained(),`${id} ${width}: long label leaves its glass control`);
    await name.evaluate((el,value)=>el.textContent=value,originalName);await role.evaluate((el,value)=>el.textContent=value,originalRole);
    assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+2),`${id} ${width}: page overflows`);
    if(width===1440){
     const glass=await card.evaluate(el=>getComputedStyle(el.querySelector(el.classList.contains('glass-series')&&el.dataset.part==='lgc-avatars-lens'?'.sg-person':'.sg-avatar-stage')!).backdropFilter);
     assert.ok(glass.includes('blur('),`${id}: material lost its backdrop blur`);
     await card.locator('[data-user="rin"]').click();
     assert.equal(await card.locator('[data-user="rin"]').getAttribute('aria-pressed'),'true');
     await card.screenshot({path:path.join(out,`${id}-identity.png`)});
    }
   }
  }
  await page.setViewportSize({width:1440,height:960});
 });
 await run('Glass popup thumbnails and native dialogs show readable translucent material',async()=>{
  await selectCategory(page,'popups');
  for(const id of ['lgc-popups-lens','lgc-popups-mist']){
   const card=page.locator(`[data-part="${id}"]`);
   const thumbnail=card.locator('.sop-popup-thumbnail > .sop-popup-window');
   assert.ok(await thumbnail.evaluate(el=>getComputedStyle(el).backdropFilter.includes('blur(')),`${id}: thumbnail has no glass blur`);
   await card.screenshot({path:path.join(out,`${id}-thumbnail.png`)});
   await card.locator('.sop-popup-trigger').click();
   const popup=card.locator('dialog.sop-popup-window');
   await popup.waitFor({state:'visible'});
   await page.waitForTimeout(400);
   const material=await popup.evaluate(el=>{
    const windowStyle=getComputedStyle(el),shellStyle=getComputedStyle(el.querySelector('.sop-popup-shell')!);
    const alpha=Number(windowStyle.backgroundColor.match(/[\d.]+/g)?.at(-1)??1);
    const titleColor=getComputedStyle(el.querySelector('h2')!).color.match(/\d+/g)!.map(Number);
    return {modal:el.matches(':modal'),blur:windowStyle.backdropFilter,alpha,shell:shellStyle.backgroundColor,titleColor};
   });
   assert.ok(material.modal&&material.blur.includes('blur('),`${id}: open dialog lacks top-layer glass`);
   assert.ok(material.alpha>0&&material.alpha<.9,`${id}: dialog is opaque`);
   assert.equal(material.shell,'rgba(0, 0, 0, 0)',`${id}: shell covers the glass`);
   assert.ok(material.titleColor.every(channel=>channel>180),`${id}: title is unreadable`);
   if(id==='lgc-popups-mist'){const input=popup.locator('.pp-fields input');await input.fill('新しい名前');assert.equal(await input.inputValue(),'新しい名前');}
   await page.screenshot({path:path.join(out,`${id}-open.png`)});
   await page.keyboard.press('Escape');
   await popup.waitFor({state:'hidden'});
   const root=card.locator('.stage-mount > .sop-popup');
   await root.evaluate(el=>el.setAttribute('data-lg-appearance','light'));
   await card.locator('.sop-popup-trigger').click();
   const light=await popup.evaluate(el=>({color:getComputedStyle(el.querySelector('h2')!).color.match(/\d+/g)!.map(Number),background:getComputedStyle(el).backgroundColor}));
   assert.ok(light.color.every(channel=>channel<100)&&light.background.startsWith('rgba('),`${id}: light glass is unreadable`);
   await page.keyboard.press('Escape');await popup.waitFor({state:'hidden'});
   await root.evaluate(el=>el.setAttribute('data-lg-material','solid'));
   await card.locator('.sop-popup-trigger').click();
   const solid=await popup.evaluate(el=>({background:getComputedStyle(el).backgroundColor,blur:getComputedStyle(el).backdropFilter}));
   assert.ok(solid.background.startsWith('rgb(')&&solid.blur==='none',`${id}: solid fallback remains translucent`);
   await page.keyboard.press('Escape');await popup.waitFor({state:'hidden'});
   await root.evaluate(el=>{el.removeAttribute('data-lg-material');el.removeAttribute('data-lg-appearance');});
   await open(id);
   await detail.locator('.sop-popup-trigger').click();
   const nested=detail.locator('dialog.sop-popup-window');
   assert.ok(await nested.evaluate(el=>el.matches(':modal')),`${id}: popup does not open above details`);
   await page.keyboard.press('Escape');
   await nested.waitFor({state:'hidden'});
   assert.ok(await detail.isVisible(),`${id}: closing popup also closed details`);
   await closeDetail();
  }
 });
 await run('Both glass context panels stay translucent with readable focused actions',async()=>{
  for(const width of [1440,390,320]){
   await page.setViewportSize({width,height:960});await selectCategory(page,'contextmenus');
   for(const id of ['lgc-contextmenus-lens','lgc-contextmenus-mist']){
    const card=page.locator(`[data-part="${id}"]`);await card.scrollIntoViewIfNeeded();await card.locator('.wb-context-open').click();
    const panel=card.locator('.wb-context-panel');await panel.waitFor({state:'visible'});await page.waitForTimeout(300);
    const surface=await card.evaluate(el=>{
     const panel=el.querySelector('.wb-context-panel')!,item=panel.querySelector('[data-menu-action="open"]')!;
     const pane=getComputedStyle(panel),focused=getComputedStyle(item),bounds=panel.getBoundingClientRect();
     return {fill:pane.backgroundColor,blur:pane.backdropFilter,item:focused.color,itemFill:focused.backgroundColor,
      inside:bounds.left>=9&&bounds.right<=innerWidth-9&&bounds.top>=9&&bounds.bottom<=innerHeight-9,page:document.documentElement.scrollWidth<=innerWidth+2};
    });
    const fill=surface.fill.match(/[\d.]+/g)?.map(Number)??[],ink=surface.item.match(/[\d.]+/g)?.map(Number)??[];
    assert.ok(fill[3]<.65&&surface.blur.includes('blur('),`${id} ${width}: popover is opaque or unblurred`);
    assert.ok(ink[0]>220&&ink[1]>220&&ink[2]>220,`${id} ${width}: focused label is unreadable`);
    assert.ok(surface.inside&&surface.page,`${id} ${width}: popover crosses the viewport`);
    if(id==='lgc-contextmenus-mist')assert.ok((surface.itemFill.match(/[\d.]+/g)?.map(Number)??[])[3]<.5,`${id}: pale selection returned`);
    if(width===1440){
     await panel.screenshot({path:path.join(out,`${id}-popover.png`)});
     await page.keyboard.press('ArrowDown');assert.equal(await card.locator('[data-menu-action="copy"]').evaluate(el=>document.activeElement===el),true);
     await card.locator('[data-menu-action="pin"]').click();assert.equal(await card.locator('[data-menu-action="pin"]').getAttribute('aria-checked'),'false');
     await card.locator('[data-menu-action="move"]').click();assert.equal(await card.locator('[data-menu-action="folder-work"]').count(),1);
     await page.keyboard.press('Escape');assert.equal(await card.locator('[data-menu-action="move"]').count(),1);
    }
    await page.keyboard.press('Escape');assert.equal(await panel.isVisible(),false);
   }
  }
  await page.setViewportSize({width:1440,height:960});
 });
 await run('Glass searches keep distinct materials, readable input and complete result rows',async()=>{
  for(const width of [1440,390,320]){
   await page.setViewportSize({width,height:960});await selectCategory(page,'searchbars');
   for(const id of ['lgc-searchbars-lens','lgc-searchbars-mist']){
    const card=page.locator(`[data-part="${id}"]`);await card.scrollIntoViewIfNeeded();await card.locator('.wb-search-input').focus();
    const view=await card.evaluate(el=>{
     const shell=el.querySelector('.wb-search-shell')!,field=el.querySelector('.wb-search-field')!,list=el.querySelector<HTMLElement>('.wb-results-list')!;
     const scene=el.querySelector('.lg-demo-scene')!.getBoundingClientRect(),box=shell.getBoundingClientRect();
     return {shell:getComputedStyle(shell).backgroundColor,field:getComputedStyle(field).backgroundColor,blur:getComputedStyle(field).backdropFilter,
      rows:list.querySelectorAll('[role=option]').length,allVisible:list.scrollHeight<=list.clientHeight+1,
      scene:box.left>=scene.left-1&&box.right<=scene.right+1&&box.bottom<=scene.bottom+1,page:document.documentElement.scrollWidth<=innerWidth+2,
      font:getComputedStyle(el.querySelector('.wb-search-input')!).fontSize,emblem:getComputedStyle(el.querySelector('.wb-search-emblem')!).display};
    });
    assert.ok(view.blur.includes('blur('),`${id} ${width}: search lens lost its material`);
    assert.equal(view.rows,5,`${id} ${width}: sample results are incomplete`);
    assert.ok(view.allVisible&&view.scene&&view.page,`${id} ${width}: results or page overflow`);
    if(id==='lgc-searchbars-lens')assert.equal(view.shell,'rgba(0, 0, 0, 0)',`${id}: outer box returned`);
    else assert.match(view.field,/rgba\(8, 30, 46, 0\.39\)/,`${id}: pale input returned`);
    if(width===320){assert.equal(view.font,'13px',`${id}: placeholder is clipped`);if(id==='lgc-searchbars-mist')assert.equal(view.emblem,'none');}
    if(width===1440)await card.screenshot({path:path.join(out,`${id}-search.png`)});
    if(width===320){
     await card.locator('[data-filter="docs"]').click();assert.equal(await card.locator('[role=option]').count(),3);
     const input=card.locator('.wb-search-input');await input.fill('Research');assert.equal(await card.locator('[role=option]').count(),1);
     await input.press('ArrowDown');assert.equal(await card.locator('[role=option][aria-selected="true"]').count(),1);
     await input.press('Enter');assert.equal(await input.getAttribute('aria-expanded'),'false');
    }
   }
  }
  await page.setViewportSize({width:1440,height:960});
 });
 await run('Glass combobox result lists use styled scrollbars and remain scrollable',async()=>{
  for(const id of ['lgc-comboboxes-lens','lgc-comboboxes-mist']){
   await open(id);
   const preview=detail.locator(`[data-preview-part="${id}"]`);
   const input=preview.locator('[data-combo]');
   await input.press('ArrowDown');
   const results=preview.locator('[data-results]');
   await page.waitForFunction(id=>{const el=document.querySelector(`#part-details [data-preview-part="${id}"] [data-results]`);return !!el&&el.clientHeight>0&&el.scrollHeight>el.clientHeight;},id);
   const initial=await results.evaluate(el=>({width:getComputedStyle(el).scrollbarWidth,color:getComputedStyle(el).scrollbarColor,scrollable:el.scrollHeight>el.clientHeight,button:getComputedStyle(el,'::-webkit-scrollbar-button').display,blur:getComputedStyle(el.closest('.ff-combo-list')!).backdropFilter}));
   assert.equal(initial.width,'thin',`${id}: browser default scrollbar width`);
   assert.notEqual(initial.color,'auto',`${id}: browser default scrollbar color`);
   assert.equal(initial.button,'none',`${id}: native scrollbar arrows remain`);
   assert.ok(initial.scrollable,`${id}: results cannot scroll`);
   assert.ok(initial.blur.includes('blur('),`${id}: glass panel lost its backdrop blur`);
   await results.evaluate(el=>el.scrollTop=el.scrollHeight);
   const end=await results.evaluate(el=>({top:el.scrollTop,max:el.scrollHeight-el.clientHeight,last:el.lastElementChild?.getBoundingClientRect().bottom??0,bottom:el.getBoundingClientRect().bottom}));
   assert.ok(end.top>0&&Math.abs(end.max-end.top)<2&&end.last<=end.bottom+2,`${id}: last option is unreachable`);
   await page.screenshot({path:path.join(out,`${id}-scrollbar.png`)});
   await input.press('Escape');
   assert.equal(await input.getAttribute('aria-expanded'),'false');
   await closeDetail();
  }
 });
 await run('Floating notices remain clearer than Mist in the actual top layer',async()=>{
  const measured:Record<string,Record<string,{alpha:number;blur:string}>>={studio:{},light:{}};
  for(const id of ['lgc-toasts-lens','lgc-toasts-mist']){
   await open(id);
   const preview=detail.locator(`[data-preview-part="${id}"]`);
   const sample=preview.locator('.ff-notice-sample');
   assert.ok(await sample.evaluate(el=>getComputedStyle(el).backdropFilter.includes('blur(')),`${id}: showcase lost glass blur`);
   const notice=preview.locator('.ff-toast-stack .ff-notice');
   for(const scene of ['studio','light']){
    await detail.locator(`[data-bg="${scene}"]`).click();
    await page.waitForTimeout(360);
    const sampleAlpha=await sample.evaluate(el=>Number(getComputedStyle(el).backgroundColor.match(/[\d.]+/g)?.at(-1)??1));
    await preview.locator('[data-notify]').click();
    await notice.waitFor({state:'visible'});
    await page.waitForTimeout(300);
    const material=await notice.evaluate(el=>{
     const style=getComputedStyle(el),alpha=Number(style.backgroundColor.match(/[\d.]+/g)?.at(-1)??1);
     return {alpha,blur:style.backdropFilter};
    });
    assert.ok(material.blur.includes('blur('),`${id} ${scene}: live notice lost backdrop blur`);
    assert.ok(Math.abs(material.alpha-sampleAlpha)<0.02,`${id} ${scene}: showcase and live notice differ`);
    measured[scene][id]=material;
    await page.screenshot({path:path.join(out,`${id}-${scene}-live.png`)});
    await notice.locator('[data-notice-close]').click();
    await notice.waitFor({state:'hidden'});
   }
   await preview.locator('.sop-foundation').evaluate(el=>el.setAttribute('data-lg-material','solid'));
   await preview.locator('[data-notify]').click();
   await notice.waitFor({state:'visible'});
   const solid=await notice.evaluate(el=>({background:getComputedStyle(el).backgroundColor,blur:getComputedStyle(el).backdropFilter}));
   assert.ok(solid.background.startsWith('rgb(')&&solid.blur==='none',`${id}: solid notice still transmits the background`);
   await notice.locator('[data-notice-close]').click();
   await notice.waitFor({state:'hidden'});
   await closeDetail();
  }
  for(const scene of ['studio','light'])assert.ok(measured[scene]['lgc-toasts-lens'].alpha+0.35<measured[scene]['lgc-toasts-mist'].alpha,`${scene}: Floating and Mist have nearly the same opacity: ${JSON.stringify(measured[scene])}`);
 });
 await run('Representative code and prompt use the usual delivery path',async()=>{
  for(const id of ['lg-flow-tabs','lgc-segments-lens','lgc-datepickers-mist','lgc-navigation-lens','lgc-tables-mist']){
   const part=await open(id),delivery=getDelivery(part,'tsx','portable');
   await detail.locator('[data-format="tsx"]').click();await detail.locator('#export-layout').selectOption('portable');
   const file=delivery.files.find(f=>f.name===delivery.entry)!;
   await detail.locator(`[data-file="${file.name}"]`).click();assert.deepEqual(await detail.locator('.editor .line-code').allTextContents(),file.code.split('\n').map(line=>line||' '),id);
   await detail.locator('[data-detail-tab="prompt"]').click();assert.equal((await detail.locator('#prompt-text').inputValue()).replace(/\r\n/g,'\n'),buildPrompt(part,'tsx','portable').replace(/\r\n/g,'\n'));
   await closeDetail();
  }
 });
 await run('Both glass scrollbars stay inside their gallery and detail previews',async()=>{
  for(const width of [1440,390]){
   await page.setViewportSize({width,height:960});
   await selectCategory(page,'scrollbars');
   for(const id of ['lgc-scrollbars-lens','lgc-scrollbars-mist']){
    const card=page.locator(`[data-part="${id}"]`);
    const layout=await card.evaluate(el=>{
     const stage=el.querySelector('.object-stage')!.getBoundingClientRect();
     const root=el.querySelector('.sop-scroll-area')!.getBoundingClientRect();
     const footer=el.querySelector('.card-bottom')!.getBoundingClientRect();
     const viewport=el.querySelector('.sop-scroll-viewport')!;
     return {stageHeight:stage.height,rootBottom:root.bottom,stageBottom:stage.bottom,footerTop:footer.top,scrollable:viewport.scrollHeight>viewport.clientHeight};
    });
    assert.ok(layout.stageHeight<450,`${id} ${width}: stage ${layout.stageHeight}`);
    assert.ok(layout.rootBottom<=layout.stageBottom+2,`${id} ${width}: root escaped stage`);
    assert.ok(layout.stageBottom<=layout.footerTop+2,`${id} ${width}: footer displaced`);
    assert.ok(layout.scrollable,`${id} ${width}: sample cannot scroll`);
    if(id==='lgc-scrollbars-lens'&&width===1440)await card.screenshot({path:path.join(out,'scrollbar-lens-card.png')});
    await open(id);
    const detailLayout=await detail.locator('.preview-stage').evaluate(el=>{
     const stage=el.getBoundingClientRect();
     const root=el.querySelector('.sop-scroll-area')!.getBoundingClientRect();
     const viewport=el.querySelector('.sop-scroll-viewport')!;
     return {stageHeight:stage.height,rootBottom:root.bottom,stageBottom:stage.bottom,scrollable:viewport.scrollHeight>viewport.clientHeight};
    });
    assert.ok(detailLayout.stageHeight<390,`${id} ${width}: detail stage ${detailLayout.stageHeight}`);
    assert.ok(detailLayout.rootBottom<=detailLayout.stageBottom+2,`${id} ${width}: detail root escaped`);
    assert.ok(detailLayout.scrollable,`${id} ${width}: detail cannot scroll`);
    await closeDetail();
   }
  }
 });
 await run('Both glass timelines keep expanded text within their lenses and scenes',async()=>{
  for(const width of [1440,390,320]){
   await page.setViewportSize({width,height:960});await selectCategory(page,'timelines');
   for(const id of ['lgc-timelines-lens','lgc-timelines-mist']){
    const card=page.locator(`[data-part="${id}"]`);await card.scrollIntoViewIfNeeded();
    for(const details of await card.locator('.sg-event details').all())if(await details.getAttribute('open')===null)await details.locator('summary').click();
    const fits=await card.evaluate(el=>{
     const scene=el.querySelector('.lg-demo-scene')!.getBoundingClientRect();
     const mains=[...el.querySelectorAll('.sg-event-main')].map(node=>node.getBoundingClientRect());
     const text=[...el.querySelectorAll('.sg-event-heading,.sg-event-body p,.sg-event-meta')].every(node=>{
      const range=document.createRange();range.selectNodeContents(node);
      const box=node.closest('.sg-event-main')!.getBoundingClientRect(),ink=range.getBoundingClientRect();
      return ink.left>=box.left+8&&ink.right<=box.right-8&&ink.top>=box.top+7&&ink.bottom<=box.bottom-7;
     });
     return {text,scene:mains.every(box=>box.left>=scene.left&&box.right<=scene.right&&box.bottom<=scene.bottom+1),page:document.documentElement.scrollWidth<=innerWidth+2};
    });
    assert.ok(fits.text,`${id} ${width}: text crossed the glass border`);
    assert.ok(fits.scene,`${id} ${width}: event crossed the scene`);
    assert.ok(fits.page,`${id} ${width}: page overflows`);
    if(width===1440)await card.screenshot({path:path.join(out,`${id}-expanded.png`)});
   }
  }
  await page.setViewportSize({width:1440,height:960});
 });
 await run('Both glass wizards keep every step within their material and scene',async()=>{
  for(const width of [1440,390,320]){
   await page.setViewportSize({width,height:960});await selectCategory(page,'wizards');
   for(const id of ['lgc-wizards-lens','lgc-wizards-mist']){
    const card=page.locator(`[data-part="${id}"]`);await card.scrollIntoViewIfNeeded();
    const first=card.locator('[data-step-target="name"]');if(await first.getAttribute('aria-current')!=='step')await first.click();
    const fits=()=>card.evaluate(el=>{
     const wizard=el.querySelector('.sg-wizard')!.getBoundingClientRect(),scene=el.querySelector('.lg-demo-scene')!.getBoundingClientRect();
     const panel=el.querySelector('.sg-wizard-panel:not([hidden])')!,surface=el.dataset.part==='lgc-wizards-lens'?panel.getBoundingClientRect():wizard;
     const text=[...panel.querySelectorAll('h3,p,.sg-wizard-fields label>span')].every(node=>{
      const range=document.createRange();range.selectNodeContents(node);const box=range.getBoundingClientRect();
      return box.left>=surface.left+12&&box.right<=surface.right-12&&box.top>=surface.top&&box.bottom<=surface.bottom;
     });
     const fields=[...panel.querySelectorAll('input,textarea')].every(node=>{const box=node.getBoundingClientRect();return box.left>=surface.left+12&&box.right<=surface.right-12;});
     const footer=el.querySelector('.sg-wizard-footer')!.getBoundingClientRect();
     return {text,fields,footer:footer.left>=wizard.left&&footer.right<=wizard.right&&footer.bottom<=wizard.bottom,scene:wizard.bottom<=scene.bottom+1,page:document.documentElement.scrollWidth<=innerWidth+2};
    });
    assert.ok(Object.values(await fits()).every(Boolean),`${id} ${width}: first step overflows`);
    await card.locator('[data-step-panel="name"] [data-field="workspace"]').fill('Studio workspace');
    await card.locator('[data-wizard-next]').click();await card.locator('[data-step-panel="note"]:not([hidden])').waitFor();
    await card.locator('[data-step-panel="note"] [data-field="note"]').fill('いくつもの画面と操作を確かめ、使う人に届くまで丁寧に整えます。');
    assert.ok(Object.values(await fits()).every(Boolean),`${id} ${width}: note step overflows`);
    await card.locator('[data-wizard-next]').click();await card.locator('[data-step-panel="review"]:not([hidden])').waitFor();
    assert.ok(Object.values(await fits()).every(Boolean),`${id} ${width}: review step overflows`);
    if(width===1440)await card.screenshot({path:path.join(out,`${id}-review.png`)});
    await card.locator('[data-wizard-prev]').click();await card.locator('[data-step-panel="note"]:not([hidden])').waitFor();
   }
  }
  await page.setViewportSize({width:1440,height:960});
 });
 await run('Both glass blocks also remain inside their cards',async()=>{
  await page.setViewportSize({width:1440,height:960});
  await selectCategory(page,'blocks');
  for(const id of ['lgc-blocks-lens','lgc-blocks-mist']){
   const card=page.locator(`[data-part="${id}"]`);
   const fits=await card.evaluate(el=>{
    const stage=el.querySelector('.object-stage')!.getBoundingClientRect();
    const surface=el.querySelector('.sop-surface')!.getBoundingClientRect();
    const footer=el.querySelector('.card-bottom')!.getBoundingClientRect();
    return surface.top>=stage.top-2&&surface.bottom<=stage.bottom+2&&stage.bottom<=footer.top+2;
   });
   assert.ok(fits,id);
  }
 });
 await run('Narrow layouts retain controls and avoid page overflow',async()=>{
  for(const width of [320,390,768]){await page.setViewportSize({width,height:900});for(const id of ['lgc-accordions-lens','lgc-accordions-mist','lg-flow-tabs','lg-index-tabs','lgc-segments-lens','lgc-segments-mist','lgc-textboxes-mist','lgc-tables-lens']){await open(id);assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+2),id+' '+width);await closeDetail();}}
 });
 assert.deepEqual(errors,[]);console.log('Glass collection gallery:',tests.length,'checks passed');
 await page.close();
}finally{fs.writeFileSync(path.join(out,'results.json'),JSON.stringify({parts:all.parts.length,glass:glass.length,tests,errors},null,2)+'\n');await browser?.close();await close?.();}
