import React from 'react';
import MercuryLoader from './MercuryLoader';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <MercuryLoader onValueChange={value=>console.info(value)}/>; }
