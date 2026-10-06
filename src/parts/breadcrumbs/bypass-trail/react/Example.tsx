import React from 'react';
import BypassTrail from './BypassTrail';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <BypassTrail onValueChange={value=>console.info(value)}/>; }
