import React from 'react';
import TunnelTrail from './TunnelTrail';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <TunnelTrail onValueChange={value=>console.info(value)}/>; }
