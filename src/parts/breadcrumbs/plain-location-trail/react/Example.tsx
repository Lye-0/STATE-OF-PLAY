import React from 'react';
import PlainLocationTrail from './PlainLocationTrail';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <PlainLocationTrail onValueChange={value=>console.info(value)}/>; }
