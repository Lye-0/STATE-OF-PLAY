import React from 'react';
import RangeMarkTrail from './RangeMarkTrail';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <RangeMarkTrail onValueChange={value=>console.info(value)}/>; }
