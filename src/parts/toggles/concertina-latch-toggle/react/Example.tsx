import React, { useState } from 'react';
import ConcertinaLatchToggle from './ConcertinaLatchToggle';
/** Merge this usage into your screen; do not replace its App/main file. */
export default function Example() {
  const [enabled, setEnabled] = useState(false);
  return <ConcertinaLatchToggle checked={enabled} onCheckedChange={setEnabled} aria-label="通知を有効にする" />;
}
