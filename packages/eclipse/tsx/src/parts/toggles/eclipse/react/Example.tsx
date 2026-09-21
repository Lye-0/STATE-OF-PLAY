import React, { useState } from 'react';
import EclipseToggle from './EclipseToggle';

export default function Example() {
  const [enabled, setEnabled] = useState(false);
  return <EclipseToggle
    checked={enabled}
    onCheckedChange={setEnabled}
    aria-label="通知を有効にする"
  />;
}
