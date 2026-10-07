import React from 'react';
import PorcelainTrayFinder from './PorcelainTrayFinder';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <PorcelainTrayFinder onValueChange={value=>console.info(value)}/>; }
