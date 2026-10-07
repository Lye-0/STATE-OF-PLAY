import React, { useState } from 'react';
import ScrewJackToggle from './ScrewJackToggle';
/** Merge this usage into your screen; do not replace its App/main file. */
export default function Example() {
  const [enabled, setEnabled] = useState(false);
  return <ScrewJackToggle checked={enabled} onCheckedChange={setEnabled} aria-label="通知を有効にする" />;
}
