import type {Page} from 'playwright';
export async function selectedCategory(page:Page):Promise<string|null>{const root=page.locator('#category-jump');if(!await root.count())return null;return root.evaluate(el=>el.tagName==='SELECT'?(el as HTMLSelectElement).value:(el as HTMLElement).dataset.value??null);}
export async function selectCategory(page:Page,id:string,waitForReady=true):Promise<void>{
 const root=page.locator('#category-jump');
 if(await root.evaluate(el=>el.tagName==='SELECT'))await root.selectOption(id);
 else if(await root.getAttribute('data-value')!==id){const trigger=root.locator('.sop-select-trigger');if(await trigger.getAttribute('aria-expanded')!=='true')await trigger.click();await root.locator('.sop-select-popup [role=option][data-value="'+id+'"]').click();}
 if(waitForReady)await galleryReady(page);
}
export async function galleryReady(page: Page, expandAll = false): Promise<void> {
 await page.waitForFunction(() => {
  const grid=document.querySelector('#part-grid');
  return !grid || grid.getAttribute('aria-busy') === 'false';
 });
 await page.waitForFunction(() => {
  if (!location.hash.startsWith('#part=')) return true;
  let id: string; try {id = decodeURIComponent(location.hash.slice(6));} catch {return true;}
  return [...document.querySelectorAll('#part-details[open] [data-preview-part]')].some(e => (e as HTMLElement).dataset.previewPart === id);
 });
 if (expandAll && !await page.evaluate(() => location.hash.startsWith('#part=')) && !await page.locator('#part-details[open]').count() && await page.locator('#category-jump').count() && await selectedCategory(page) === 'all') {
  while (await page.locator('#load-more').isVisible()) { await page.locator('#load-more').click(); await galleryReady(page); }
 }
}
