import React from 'react';
import CopperTrail from './CopperTrail';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <CopperTrail onValueChange={value=>console.info(value)}/>; }
