import React, { useState } from 'react';
import ChromeToggle from './ChromeToggle';

export default function Example() {
  const [enabled, setEnabled] = useState(false);
  return <ChromeToggle
    checked={enabled}
    onCheckedChange={setEnabled}
    aria-label="通知を有効にする"
  />;
}
