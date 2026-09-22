import React from 'react';
import BlueprintTrail from './BlueprintTrail';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <BlueprintTrail onValueChange={value=>console.info(value)}/>; }
