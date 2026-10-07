import React from 'react';
import PerforatedPathTrail from './PerforatedPathTrail';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <PerforatedPathTrail onValueChange={value=>console.info(value)}/>; }
