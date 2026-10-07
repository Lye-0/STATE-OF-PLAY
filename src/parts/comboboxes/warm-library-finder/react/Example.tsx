import React from 'react';
import WarmLibraryFinder from './WarmLibraryFinder';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <WarmLibraryFinder onValueChange={value=>console.info(value)}/>; }
