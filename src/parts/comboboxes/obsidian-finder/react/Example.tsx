import React from 'react';
import ObsidianFinder from './ObsidianFinder';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <ObsidianFinder onValueChange={value=>console.info(value)}/>; }
