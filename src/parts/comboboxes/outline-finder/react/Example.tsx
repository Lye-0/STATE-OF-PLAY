import React from 'react';
import OutlineFinder from './OutlineFinder';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <OutlineFinder onValueChange={value=>console.info(value)}/>; }
