import React from 'react';
import IndexStampFinder from './IndexStampFinder';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <IndexStampFinder onValueChange={value=>console.info(value)}/>; }
