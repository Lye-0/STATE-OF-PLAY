/** Lossless transport of source TEXT. The displayed/exported author code is not minified. */
import type {Part,SourceFile,Format} from './types';
type PackedFile=Omit<SourceFile,'code'> & {code:number};
type PackedPart=Omit<Part,'files'|'portableFiles'|'preview'|'markup'|'usage'|'prompt'> & {
 files:Record<Format,PackedFile[]>;portableFiles:Record<Format,PackedFile[]>;preview:Record<string,number>;markup:number;usage:number;prompt:number;
};
export interface PackedCatalog {schema:2;strings:string[];texts:number[][];parts:PackedPart[];}
export function packCatalog(parts:readonly Part[]):PackedCatalog {
 const strings:string[]=[],fragments=new Map<string,number>(),texts:number[][]=[],index=new Map<string,number>();
 const fragment=(text:string):number=>{const found=fragments.get(text);if(found!==undefined)return found;const n=strings.length;strings.push(text);fragments.set(text,n);return n;};
 const intern=(text:string):number=>{const known=index.get(text);if(known!==undefined)return known;const n=texts.length;
  // Long repeated shared engines inside standalone previews also reuse exact lines.
  const pieces=text.length>600?(text.match(/[^\n]*\n|[^\n]+$/g)??['']):[text];
  texts.push(pieces.map(fragment));index.set(text,n);return n;
 };
 const fileSets=(sets:Record<Format,SourceFile[]>)=>Object.fromEntries(Object.entries(sets).map(([format,files])=>[format,files.map(file=>({...file,code:intern(file.code)}))])) as Record<Format,PackedFile[]>;
 return {schema:2,strings,texts,parts:parts.map(part=>({...part,markup:intern(part.markup),usage:intern(part.usage),prompt:intern(part.prompt),files:fileSets(part.files),portableFiles:fileSets(part.portableFiles),preview:Object.fromEntries(Object.entries(part.preview).map(([name,text])=>[name,intern(text)]))}))};
}
export function unpackCatalog(packed:PackedCatalog):Part[]{
 if(packed.schema!==2)throw new Error('Unknown catalogue transport schema.');
 const restored=new Map<number,string>();
 const text=(n:number):string=>{
  if(!Number.isInteger(n)||n<0||n>=packed.texts.length)throw new Error('Invalid catalogue text reference.');
  const previous=restored.get(n);if(previous!==undefined)return previous;
  const value=packed.texts[n].map(i=>{if(!Number.isInteger(i)||i<0||i>=packed.strings.length)throw new Error('Invalid catalogue string reference.');return packed.strings[i];}).join('');
  restored.set(n,value);return value;
 };
 const fileSets=(sets:Record<Format,PackedFile[]>)=>Object.fromEntries(Object.entries(sets).map(([format,files])=>[format,files.map(file=>({...file,code:text(file.code)}))])) as Record<Format,SourceFile[]>;
 return packed.parts.map(part=>({...part,markup:text(part.markup),usage:text(part.usage),prompt:text(part.prompt),files:fileSets(part.files),portableFiles:fileSets(part.portableFiles),preview:Object.fromEntries(Object.entries(part.preview).map(([name,n])=>[name,text(n)]))}));
}
