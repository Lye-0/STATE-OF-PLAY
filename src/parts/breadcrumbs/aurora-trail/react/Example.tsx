import React from 'react';
import AuroraTrail from './AuroraTrail';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <AuroraTrail onValueChange={value=>console.info(value)}/>; }
