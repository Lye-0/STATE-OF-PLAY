import React, { useState } from 'react';
import NixieToggle from './NixieToggle';
/** Merge this usage into your screen; do not replace its App/main file. */
export default function Example() {
  const [enabled, setEnabled] = useState(false);
  return <NixieToggle checked={enabled} onCheckedChange={setEnabled} aria-label="通知を有効にする" />;
}
