import React from 'react';
import MercuryRange from './MercuryRange';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <MercuryRange onValueChange={value=>console.info(value)}/>; }
