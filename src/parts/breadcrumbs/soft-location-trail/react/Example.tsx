import React from 'react';
import SoftLocationTrail from './SoftLocationTrail';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <SoftLocationTrail onValueChange={value=>console.info(value)}/>; }
