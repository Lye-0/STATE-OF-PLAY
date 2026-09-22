import React from 'react';
import CeramicFinder from './CeramicFinder';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <CeramicFinder onValueChange={value=>console.info(value)}/>; }
