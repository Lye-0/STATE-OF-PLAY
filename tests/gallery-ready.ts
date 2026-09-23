import type {Page} from 'playwright';
export async function galleryReady(page: Page, expandAll = false): Promise<void> {
 await page.waitForFunction(() => {
  const grid=document.querySelector('#part-grid');
  return !grid || grid.getAttribute('aria-busy') === 'false';
 });
 if (expandAll && await page.locator('#category-jump').count() && await page.locator('#category-jump').inputValue() === 'all') {
  while (await page.locator('#load-more').isVisible()) { await page.locator('#load-more').click(); await galleryReady(page); }
 }
 await page.waitForFunction(() => {
  if (!location.hash.startsWith('#part=')) return true;
  let id: string; try {id = decodeURIComponent(location.hash.slice(6));} catch {return true;}
  return [...document.querySelectorAll('#part-details[open] [data-preview-part]')].some(e => (e as HTMLElement).dataset.previewPart === id);
 });
}
