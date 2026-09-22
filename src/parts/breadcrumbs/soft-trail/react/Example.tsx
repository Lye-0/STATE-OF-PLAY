import React from 'react';
import SoftTrail from './SoftTrail';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <SoftTrail onValueChange={value=>console.info(value)}/>; }
