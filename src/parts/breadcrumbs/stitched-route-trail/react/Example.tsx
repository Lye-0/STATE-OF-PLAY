import React from 'react';
import StitchedRouteTrail from './StitchedRouteTrail';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <StitchedRouteTrail onValueChange={value=>console.info(value)}/>; }
