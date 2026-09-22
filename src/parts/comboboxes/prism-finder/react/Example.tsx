import React from 'react';
import PrismFinder from './PrismFinder';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <PrismFinder onValueChange={value=>console.info(value)}/>; }
