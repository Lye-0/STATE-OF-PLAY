import React from 'react';
import AuroraFinder from './AuroraFinder';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <AuroraFinder onValueChange={value=>console.info(value)}/>; }
