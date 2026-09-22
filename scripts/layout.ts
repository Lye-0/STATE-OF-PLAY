/** Build-time layout mapping. No filename flattening, guessed aliases or consumer-root assumptions. */
import { validateArchiveEntries, validateArchivePath } from '../src/shared/archive.ts';
import type { Format, Layout } from '../src/catalog/types.ts';
export function componentFolder(componentName: string): string {
  return componentName.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}
export function outputPath(source: string, base: string, componentName: string, format: Format, layout: Layout, exampleOnly = false): string {
  validateArchivePath(source); validateArchivePath(base);
  const extension = (name: string) => format === 'js' || format === 'jsx' ? name.replace(/\.tsx$/, '.jsx').replace(/\.ts$/, '.js') : name;
  if (layout === 'original') return extension(source);
  const folder = componentFolder(componentName), tail = source.startsWith(base + '/') ? source.slice(base.length+1) : null;
  let output: string;
  if (tail === 'react/Example.tsx') output = 'examples/Example.tsx';
  else if (tail === 'vanilla/main.ts') output = 'examples/main.ts';
  else if (tail === 'vanilla/index.html') output = 'examples/index.html';
  else if (exampleOnly && source.startsWith('src/shared/')) output = `examples/internal/shared/${source.slice('src/shared/'.length)}`;
  else if (exampleOnly && tail !== null) output = `examples/internal/component/${tail}`;
  else if (source.startsWith('src/shared/')) output = `${folder}/internal/${source.slice('src/shared/'.length)}`;
  else if (tail === `react/${componentName}.tsx`) output = `${folder}/${componentName}.tsx`;
  else if (tail === 'vanilla/init.ts') output = `${folder}/init.ts`;
  else if (tail !== null && !tail.startsWith('react/') && !tail.startsWith('vanilla/')) output = `${folder}/${tail}`;
  else if (tail !== null) output = `${folder}/internal/component/${tail}`;
  else throw new Error(`Unsupported cross-component dependency: ${source}. Keep reusable runtime under src/shared/.`);
  return validateArchivePath(extension(output));
}
export function layoutMap(sources: readonly string[], base: string, componentName: string, format: Format, layout: Layout, exampleOnly: ReadonlySet<string> = new Set()) {
  const map = new Map(sources.map(source => [source, outputPath(source, base, componentName, format, layout, exampleOnly.has(source))]));
  // On Windows, even different-case names/directories are conflicts. Never overwrite silently.
  validateArchiveEntries([...map.values()].map(name=>({name,code:''})));
  return map;
}
