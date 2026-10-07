import React from 'react';
import TerracedProgress from './TerracedProgress';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <TerracedProgress onValueChange={value=>console.info(value)}/>; }
