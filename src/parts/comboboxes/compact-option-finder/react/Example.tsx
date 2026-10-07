import React from 'react';
import CompactOptionFinder from './CompactOptionFinder';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <CompactOptionFinder onValueChange={value=>console.info(value)}/>; }
