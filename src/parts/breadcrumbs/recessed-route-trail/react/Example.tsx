import React from 'react';
import RecessedRouteTrail from './RecessedRouteTrail';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <RecessedRouteTrail onValueChange={value=>console.info(value)}/>; }
