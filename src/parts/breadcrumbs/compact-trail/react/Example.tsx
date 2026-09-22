import React from 'react';
import CompactTrail from './CompactTrail';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <CompactTrail onValueChange={value=>console.info(value)}/>; }
