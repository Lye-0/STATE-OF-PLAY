import React, { useState } from 'react';
import PneumaticToggle from './PneumaticToggle';
/** Merge this usage into your screen; do not replace its App/main file. */
export default function Example() {
  const [enabled, setEnabled] = useState(false);
  return <PneumaticToggle checked={enabled} onCheckedChange={setEnabled} aria-label="通知を有効にする" />;
}
