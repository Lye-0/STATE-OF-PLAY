declare const __APP_VERSION__: string;
declare module 'virtual:sop-catalog' { const parts: import('./catalog/types').Part[]; export default parts; }
declare module 'virtual:sop-mounts' { export const mounts: Record<string, import('./catalog/types').MountPart>; }
declare module 'virtual:sop-styles';
interface PrismToken { type: string; alias?: string | string[]; content: string | PrismToken | (string | PrismToken)[]; }
interface Window {
  SOP_CATALOG: import('./catalog/types').PartSummary[];
  StateOfPlay: Readonly<{ version: string; getStates(): Record<string, boolean>; getPartCount(): number }>;
  Prism?: { languages: Record<string, object>; tokenize(code: string, grammar: object): (string | PrismToken)[] };
  JSZip: new () => {
    folder(name: string): unknown;
    file(name: string, code: string, options?: { binary?: boolean; createFolders?: boolean }): unknown;
    generateAsync(options: { type: 'blob'; mimeType: string; compression: 'DEFLATE'; compressionOptions: {level: number}; platform: 'DOS' }): Promise<Blob>;
  };
}

declare module 'virtual:sop-browser' {
 export const index: import('./catalog/types').PartSummary[];
 export const categoryLoaders: Record<string, () => Promise<import('./catalog/types').CategoryModule>>;
 export const partUrls: Record<string, string>;
 export function fetchPartPayload(id: string): Promise<import('./catalog/transport').PackedCatalog>;
}
