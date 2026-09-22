import React from 'react';
import MercuryProgress from './MercuryProgress';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <MercuryProgress onValueChange={value=>console.info(value)}/>; }
