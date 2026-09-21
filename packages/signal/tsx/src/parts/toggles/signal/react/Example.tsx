import React, { useState } from 'react';
import SignalToggle from './SignalToggle';

export default function Example() {
  const [enabled, setEnabled] = useState(false);
  return <SignalToggle
    checked={enabled}
    onCheckedChange={setEnabled}
    aria-label="通知を有効にする"
  />;
}
