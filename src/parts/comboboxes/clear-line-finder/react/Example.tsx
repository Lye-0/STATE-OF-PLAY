import React from 'react';
import ClearLineFinder from './ClearLineFinder';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <ClearLineFinder onValueChange={value=>console.info(value)}/>; }
