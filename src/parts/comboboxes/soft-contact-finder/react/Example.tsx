import React from 'react';
import SoftContactFinder from './SoftContactFinder';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <SoftContactFinder onValueChange={value=>console.info(value)}/>; }
