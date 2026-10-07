import React, { useState } from 'react';
import CompartmentToggle from './CompartmentToggle';
/** Merge this usage into your screen; do not replace its App/main file. */
export default function Example() {
  const [enabled, setEnabled] = useState(false);
  return <CompartmentToggle checked={enabled} onCheckedChange={setEnabled} aria-label="通知を有効にする" />;
}
