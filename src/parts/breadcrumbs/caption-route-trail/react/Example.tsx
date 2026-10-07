import React from 'react';
import CaptionRouteTrail from './CaptionRouteTrail';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <CaptionRouteTrail onValueChange={value=>console.info(value)}/>; }
