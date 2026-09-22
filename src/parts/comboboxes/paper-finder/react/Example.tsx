import React from 'react';
import PaperFinder from './PaperFinder';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <PaperFinder onValueChange={value=>console.info(value)}/>; }
