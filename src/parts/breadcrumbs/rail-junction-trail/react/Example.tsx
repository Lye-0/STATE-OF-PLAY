import React from 'react';
import RailJunctionTrail from './RailJunctionTrail';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <RailJunctionTrail onValueChange={value=>console.info(value)}/>; }
