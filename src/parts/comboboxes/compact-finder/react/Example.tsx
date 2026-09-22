import React from 'react';
import CompactFinder from './CompactFinder';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <CompactFinder onValueChange={value=>console.info(value)}/>; }
