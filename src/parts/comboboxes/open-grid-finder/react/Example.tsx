import React from 'react';
import OpenGridFinder from './OpenGridFinder';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <OpenGridFinder onValueChange={value=>console.info(value)}/>; }
