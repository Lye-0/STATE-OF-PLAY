import React from 'react';
import MercuryChoice from './MercuryChoice';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <MercuryChoice onValueChange={value=>console.info(value)}/>; }
