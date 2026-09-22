import React from 'react';
import MercuryTrail from './MercuryTrail';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <MercuryTrail onValueChange={value=>console.info(value)}/>; }
