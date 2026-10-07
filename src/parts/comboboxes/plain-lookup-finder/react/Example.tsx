import React from 'react';
import PlainLookupFinder from './PlainLookupFinder';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <PlainLookupFinder onValueChange={value=>console.info(value)}/>; }
