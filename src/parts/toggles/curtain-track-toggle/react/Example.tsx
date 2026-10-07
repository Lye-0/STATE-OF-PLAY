import React, { useState } from 'react';
import CurtainTrackToggle from './CurtainTrackToggle';
/** Merge this usage into your screen; do not replace its App/main file. */
export default function Example() {
  const [enabled, setEnabled] = useState(false);
  return <CurtainTrackToggle checked={enabled} onCheckedChange={setEnabled} aria-label="通知を有効にする" />;
}
