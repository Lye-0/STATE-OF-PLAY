import React from 'react';
import LgcNumbersLens from './LgcNumbersLens';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <LgcNumbersLens onValueChange={value=>console.info(value)}/>; }
