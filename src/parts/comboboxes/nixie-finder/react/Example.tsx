import React from 'react';
import NixieFinder from './NixieFinder';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <NixieFinder onValueChange={value=>console.info(value)}/>; }
