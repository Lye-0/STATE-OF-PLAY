import React from 'react';
import BorderRouteTrail from './BorderRouteTrail';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <BorderRouteTrail onValueChange={value=>console.info(value)}/>; }
