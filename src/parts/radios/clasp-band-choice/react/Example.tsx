import React from 'react';
import ClaspBandChoice from './ClaspBandChoice';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <ClaspBandChoice onValueChange={value=>console.info(value)}/>; }
