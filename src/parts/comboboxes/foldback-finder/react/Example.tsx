import React from 'react';
import FoldbackFinder from './FoldbackFinder';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <FoldbackFinder onValueChange={value=>console.info(value)}/>; }
