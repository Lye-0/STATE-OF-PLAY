/** Node-side access to the same versioned vendor file served to the browser. */
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import { createRequire } from 'node:module';
import type { ArchiveSink } from '../src/shared/archive.ts';
export interface ZipEntry { name: string; dir: boolean; async(type: 'string'): Promise<string>; async(type: 'uint8array'): Promise<Uint8Array>; }
export interface Zip extends ArchiveSink {
  files: Record<string, ZipEntry>;
  file(name: string): ZipEntry | null;
  file(name: string, content: string | Uint8Array, options?: {binary?: boolean; createFolders?: boolean; date?: Date}): Zip;
  folder(name: string): Zip | null;
  generateAsync(options: {type: 'nodebuffer'; compression: 'DEFLATE'; compressionOptions?: {level: number}; platform?: 'DOS'}): Promise<Buffer>;
}
interface ZipConstructor { new(): Zip; loadAsync(bytes: Uint8Array, options?: {checkCRC32: boolean}): Promise<Zip>; }
const module = {exports: {} as unknown};
runInNewContext(readFileSync(new URL('../public/vendor/jszip.js', import.meta.url), 'utf8'), {
  module, exports: module.exports, require: createRequire(import.meta.url),
  Buffer, Uint8Array, ArrayBuffer, Promise, setTimeout, clearTimeout, setImmediate, clearImmediate, console
});
export const JSZip = module.exports as ZipConstructor;
