import React from 'react';
import CompactVolumeRange from './CompactVolumeRange';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <CompactVolumeRange onValueChange={value=>console.info(value)}/>; }
