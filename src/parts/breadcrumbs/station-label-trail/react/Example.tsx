import React from 'react';
import StationLabelTrail from './StationLabelTrail';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <StationLabelTrail onValueChange={value=>console.info(value)}/>; }
