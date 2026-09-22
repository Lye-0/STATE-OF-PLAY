import React from 'react';
import FolioFinder from './FolioFinder';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <FolioFinder onValueChange={value=>console.info(value)}/>; }
