import React from 'react';
import ContourFinder from './ContourFinder';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <ContourFinder onValueChange={value=>console.info(value)}/>; }
