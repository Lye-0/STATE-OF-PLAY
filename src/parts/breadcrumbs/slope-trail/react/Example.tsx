import React from 'react';
import SlopeTrail from './SlopeTrail';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <SlopeTrail onValueChange={value=>console.info(value)}/>; }
