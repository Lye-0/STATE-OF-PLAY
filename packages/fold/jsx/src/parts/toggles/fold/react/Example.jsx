import React, { useState } from 'react';
import FoldToggle from './FoldToggle';
export default function Example() {
    const [enabled, setEnabled] = useState(false);
    return <FoldToggle checked={enabled} onCheckedChange={setEnabled} aria-label="通知を有効にする"/>;
}
