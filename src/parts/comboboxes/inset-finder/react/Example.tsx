import React from 'react';
import InsetFinder from './InsetFinder';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <InsetFinder onValueChange={value=>console.info(value)}/>; }
