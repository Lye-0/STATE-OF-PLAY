import React from 'react';
import VerticalLocationTrail from './VerticalLocationTrail';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <VerticalLocationTrail onValueChange={value=>console.info(value)}/>; }
