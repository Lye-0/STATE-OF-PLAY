import React from 'react';
import LgcProgressLens from './LgcProgressLens';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <LgcProgressLens onValueChange={value=>console.info(value)}/>; }
