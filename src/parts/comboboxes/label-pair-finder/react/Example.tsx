import React from 'react';
import LabelPairFinder from './LabelPairFinder';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <LabelPairFinder onValueChange={value=>console.info(value)}/>; }
