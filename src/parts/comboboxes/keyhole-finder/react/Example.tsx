import React from 'react';
import KeyholeFinder from './KeyholeFinder';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <KeyholeFinder onValueChange={value=>console.info(value)}/>; }
