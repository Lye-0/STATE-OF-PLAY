import React, { useState } from 'react';
import VoltToggle from './VoltToggle';

export default function Example() {
  const [enabled, setEnabled] = useState(false);
  return <VoltToggle
    checked={enabled}
    onCheckedChange={setEnabled}
    aria-label="通知を有効にする"
  />;
}
