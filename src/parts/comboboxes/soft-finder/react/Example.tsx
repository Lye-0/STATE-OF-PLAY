import React from 'react';
import SoftFinder from './SoftFinder';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <SoftFinder onValueChange={value=>console.info(value)}/>; }
