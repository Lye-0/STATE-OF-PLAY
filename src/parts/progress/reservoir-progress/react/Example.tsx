import React from 'react';
import ReservoirProgress from './ReservoirProgress';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <ReservoirProgress onValueChange={value=>console.info(value)}/>; }
