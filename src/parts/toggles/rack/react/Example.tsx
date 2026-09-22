import React, { useState } from 'react';
import RackToggle from './RackToggle';
/** Merge this usage into your screen; do not replace its App/main file. */
export default function Example() {
  const [enabled, setEnabled] = useState(false);
  return <RackToggle checked={enabled} onCheckedChange={setEnabled} aria-label="通知を有効にする" />;
}
