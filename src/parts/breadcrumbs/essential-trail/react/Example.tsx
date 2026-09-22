import React from 'react';
import EssentialTrail from './EssentialTrail';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <EssentialTrail onValueChange={value=>console.info(value)}/>; }
