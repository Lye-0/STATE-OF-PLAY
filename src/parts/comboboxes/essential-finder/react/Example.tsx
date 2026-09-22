import React from 'react';
import EssentialFinder from './EssentialFinder';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <EssentialFinder onValueChange={value=>console.info(value)}/>; }
