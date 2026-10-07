import React from 'react';
import LineLocationTrail from './LineLocationTrail';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <LineLocationTrail onValueChange={value=>console.info(value)}/>; }
