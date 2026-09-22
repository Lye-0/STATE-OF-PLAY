import React from 'react';
import InsetTrail from './InsetTrail';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <InsetTrail onValueChange={value=>console.info(value)}/>; }
