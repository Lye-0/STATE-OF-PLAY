import React from 'react';
import BlueprintFinder from './BlueprintFinder';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <BlueprintFinder onValueChange={value=>console.info(value)}/>; }
