import React from 'react';
import WedgedStepper from './WedgedStepper';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <WedgedStepper onValueChange={value=>console.info(value)}/>; }
