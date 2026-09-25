import React from 'react';
import LgcBadgesLens from './LgcBadgesLens';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <LgcBadgesLens onValueChange={value=>console.info(value)}/>; }
