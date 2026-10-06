import React from 'react';
import SteppedFinder from './SteppedFinder';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <SteppedFinder onValueChange={value=>console.info(value)}/>; }
