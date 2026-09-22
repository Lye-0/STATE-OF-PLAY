import React from 'react';
import OutlineTrail from './OutlineTrail';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <OutlineTrail onValueChange={value=>console.info(value)}/>; }
