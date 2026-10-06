import React from 'react';
import DividerFinder from './DividerFinder';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <DividerFinder onValueChange={value=>console.info(value)}/>; }
