import React from 'react';
import VelvetFinder from './VelvetFinder';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <VelvetFinder onValueChange={value=>console.info(value)}/>; }
