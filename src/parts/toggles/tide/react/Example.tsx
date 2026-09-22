import React, { useState } from 'react';
import TideToggle from './TideToggle';
/** Merge this usage into your screen; do not replace its App/main file. */
export default function Example() {
  const [enabled, setEnabled] = useState(false);
  return <TideToggle checked={enabled} onCheckedChange={setEnabled} aria-label="通知を有効にする" />;
}
