import React from 'react';
import VelvetTrail from './VelvetTrail';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <VelvetTrail onValueChange={value=>console.info(value)}/>; }
