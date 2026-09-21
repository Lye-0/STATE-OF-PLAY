import React, { useState } from 'react';
import PrismToggle from './PrismToggle';

export default function Example() {
  const [enabled, setEnabled] = useState(false);
  return <PrismToggle
    checked={enabled}
    onCheckedChange={setEnabled}
    aria-label="通知を有効にする"
  />;
}
