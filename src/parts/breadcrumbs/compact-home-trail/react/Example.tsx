import React from 'react';
import CompactHomeTrail from './CompactHomeTrail';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <CompactHomeTrail onValueChange={value=>console.info(value)}/>; }
