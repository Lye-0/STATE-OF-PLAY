import React from 'react';
import CornerRibbonTrail from './CornerRibbonTrail';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <CornerRibbonTrail onValueChange={value=>console.info(value)}/>; }
