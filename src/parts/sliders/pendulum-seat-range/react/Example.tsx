import React from 'react';
import PendulumSeatRange from './PendulumSeatRange';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <PendulumSeatRange onValueChange={value=>console.info(value)}/>; }
