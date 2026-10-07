import React from 'react';
import DoubleOrbitProgress from './DoubleOrbitProgress';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <DoubleOrbitProgress onValueChange={value=>console.info(value)}/>; }
