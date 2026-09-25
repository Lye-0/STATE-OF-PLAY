import React from 'react';
import LgcHintsLens from './LgcHintsLens';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <LgcHintsLens onValueChange={value=>console.info(value)}/>; }
