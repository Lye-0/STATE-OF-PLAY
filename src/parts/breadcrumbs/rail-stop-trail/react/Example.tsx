import React from 'react';
import RailStopTrail from './RailStopTrail';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <RailStopTrail onValueChange={value=>console.info(value)}/>; }
