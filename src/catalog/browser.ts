import {index, categoryLoaders, partUrls, fetchPartPayload} from 'virtual:sop-browser';
import {unpackCatalog} from './transport';
import type {CategoryModule, Part} from './types';
export {index};
const categories = new Map<string, Promise<CategoryModule>>();
const details = new Map<string, Promise<Part>>();
function cached<T>(cache: Map<string, Promise<T>>, key: string, load: () => Promise<T>): Promise<T> {
 const existing = cache.get(key); if (existing) return existing;
 const pending = load().catch(error => { cache.delete(key); throw error; });
 cache.set(key, pending); return pending;
}
export class CategoryLoadError extends Error {
 constructor(public readonly category: string, cause: unknown) { super('Category load failed: '+category, {cause}); }
}
export function loadCategory(category: string): Promise<CategoryModule> {
 return cached(categories, category, async () => {
  const load = categoryLoaders[category]; if (!load) throw new Error('Unknown category: '+category);
  try { return await load(); } catch (error) { throw new CategoryLoadError(category, error); }
 });
}
export function loadPart(id: string): Promise<Part> {
 return cached(details, id, async () => {
  if (!Object.hasOwn(partUrls, id)) throw new Error('Unknown part: '+id);
  const parts = unpackCatalog(await fetchPartPayload(id));
  if (parts.length !== 1 || parts[0].id !== id) throw new Error('Unexpected part response');
  return parts[0];
 });
}
