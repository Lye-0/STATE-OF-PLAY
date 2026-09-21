import React, { useState } from 'react';
import BloomToggle from './BloomToggle';

export default function Example() {
  const [enabled, setEnabled] = useState(false);
  return <BloomToggle
    checked={enabled}
    onCheckedChange={setEnabled}
    aria-label="通知を有効にする"
  />;
}
