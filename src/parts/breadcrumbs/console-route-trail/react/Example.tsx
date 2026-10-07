import React from 'react';
import ConsoleRouteTrail from './ConsoleRouteTrail';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <ConsoleRouteTrail onValueChange={value=>console.info(value)}/>; }
