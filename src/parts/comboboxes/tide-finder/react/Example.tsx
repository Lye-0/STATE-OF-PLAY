import React from 'react';
import TideFinder from './TideFinder';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <TideFinder onValueChange={value=>console.info(value)}/>; }
