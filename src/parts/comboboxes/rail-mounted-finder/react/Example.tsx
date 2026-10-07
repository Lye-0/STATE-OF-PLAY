import React from 'react';
import RailMountedFinder from './RailMountedFinder';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <RailMountedFinder onValueChange={value=>console.info(value)}/>; }
