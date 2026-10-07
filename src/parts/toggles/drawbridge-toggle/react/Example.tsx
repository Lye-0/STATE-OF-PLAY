import React, { useState } from 'react';
import DrawbridgeToggle from './DrawbridgeToggle';
/** Merge this usage into your screen; do not replace its App/main file. */
export default function Example() {
  const [enabled, setEnabled] = useState(false);
  return <DrawbridgeToggle checked={enabled} onCheckedChange={setEnabled} aria-label="通知を有効にする" />;
}
