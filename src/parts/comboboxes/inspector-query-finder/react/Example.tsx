import React from 'react';
import InspectorQueryFinder from './InspectorQueryFinder';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <InspectorQueryFinder onValueChange={value=>console.info(value)}/>; }
