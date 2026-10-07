import React from 'react';
import OpenMarkerTrail from './OpenMarkerTrail';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <OpenMarkerTrail onValueChange={value=>console.info(value)}/>; }
