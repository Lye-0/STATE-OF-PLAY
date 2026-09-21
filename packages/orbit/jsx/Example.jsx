import React, { useState } from 'react';
import OrbitToggle from './OrbitToggle';
export default function Example() {
    const [enabled, setEnabled] = useState(false);
    return <OrbitToggle checked={enabled} onCheckedChange={setEnabled} aria-label="通知を有効にする"/>;
}
