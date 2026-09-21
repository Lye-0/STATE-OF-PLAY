import React, { useState } from 'react';
import AnalogToggle from './AnalogToggle';
export default function Example() {
    const [enabled, setEnabled] = useState(false);
    return <AnalogToggle checked={enabled} onCheckedChange={setEnabled} aria-label="通知を有効にする"/>;
}
