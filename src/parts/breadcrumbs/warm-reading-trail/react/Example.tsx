import React from 'react';
import WarmReadingTrail from './WarmReadingTrail';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <WarmReadingTrail onValueChange={value=>console.info(value)}/>; }
