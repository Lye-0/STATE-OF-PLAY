import React from 'react';
import SeparatorLocationTrail from './SeparatorLocationTrail';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <SeparatorLocationTrail onValueChange={value=>console.info(value)}/>; }
