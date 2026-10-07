import React from 'react';
import StitchedQueryFinder from './StitchedQueryFinder';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <StitchedQueryFinder onValueChange={value=>console.info(value)}/>; }
