import React from 'react';
import MercuryFinder from './MercuryFinder';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <MercuryFinder onValueChange={value=>console.info(value)}/>; }
