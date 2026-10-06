import React, { useState } from 'react';
import BraidedToggle from './BraidedToggle';
/** Merge this usage into your screen; do not replace its App/main file. */
export default function Example() {
  const [enabled, setEnabled] = useState(false);
  return <BraidedToggle checked={enabled} onCheckedChange={setEnabled} aria-label="通知を有効にする" />;
}
