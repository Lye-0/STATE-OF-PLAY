import React from 'react';
import LgcUploadsLens from './LgcUploadsLens';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <LgcUploadsLens onValueChange={value=>console.info(value)}/>; }
