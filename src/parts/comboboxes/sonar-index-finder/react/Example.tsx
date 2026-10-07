import React from 'react';
import SonarIndexFinder from './SonarIndexFinder';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <SonarIndexFinder onValueChange={value=>console.info(value)}/>; }
