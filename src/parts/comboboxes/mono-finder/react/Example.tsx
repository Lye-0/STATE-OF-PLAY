import React from 'react';
import MonoFinder from './MonoFinder';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <MonoFinder onValueChange={value=>console.info(value)}/>; }
