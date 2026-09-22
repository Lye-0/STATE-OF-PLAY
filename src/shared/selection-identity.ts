/** Independent exported copies must never share native radio names or tab/panel IDs. */
let sequence = 0;
export function selectionIdentity(kind: 'tabs' | 'segments'): string {
  const random = typeof crypto !== 'undefined' && typeof crypto.getRandomValues === 'function'
    ? [...crypto.getRandomValues(new Uint32Array(2))].map(n => n.toString(36)).join('-')
    : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
  return `sop-${kind}-${random}-${++sequence}`;
}
