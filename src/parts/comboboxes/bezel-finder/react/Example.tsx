import React from 'react';
import BezelFinder from './BezelFinder';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <BezelFinder onValueChange={value=>console.info(value)}/>; }
