import React from 'react';
import TransitFinder from './TransitFinder';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <TransitFinder onValueChange={value=>console.info(value)}/>; }
