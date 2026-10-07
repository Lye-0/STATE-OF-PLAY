import React, { useState } from 'react';
import RasterRevealToggle from './RasterRevealToggle';
/** Merge this usage into your screen; do not replace its App/main file. */
export default function Example() {
  const [enabled, setEnabled] = useState(false);
  return <RasterRevealToggle checked={enabled} onCheckedChange={setEnabled} aria-label="通知を有効にする" />;
}
