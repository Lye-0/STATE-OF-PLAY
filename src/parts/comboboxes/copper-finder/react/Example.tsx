import React from 'react';
import CopperFinder from './CopperFinder';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <CopperFinder onValueChange={value=>console.info(value)}/>; }
