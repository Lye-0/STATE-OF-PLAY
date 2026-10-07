import React from 'react';
import SmallRingProgress from './SmallRingProgress';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <SmallRingProgress onValueChange={value=>console.info(value)}/>; }
