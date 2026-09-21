import React, { useState } from 'react';
import LiquidToggle from './LiquidToggle';
export default function Example() {
    const [enabled, setEnabled] = useState(false);
    return <LiquidToggle checked={enabled} onCheckedChange={setEnabled} aria-label="通知を有効にする"/>;
}
