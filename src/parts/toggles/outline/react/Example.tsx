import React, { useState } from 'react';
import OutlineToggle from './OutlineToggle';
/** Merge this usage into your screen; do not replace its App/main file. */
export default function Example() {
  const [enabled, setEnabled] = useState(false);
  return <OutlineToggle checked={enabled} onCheckedChange={setEnabled} aria-label="通知を有効にする" />;
}
