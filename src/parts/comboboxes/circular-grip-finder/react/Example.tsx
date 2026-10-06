import React from 'react';
import CircularGripFinder from './CircularGripFinder';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <CircularGripFinder onValueChange={value=>console.info(value)}/>; }
