import React from 'react';
import LgcSlidersLens from './LgcSlidersLens';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <LgcSlidersLens onValueChange={value=>console.info(value)}/>; }
