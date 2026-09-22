import React from 'react';
import CompactStepper from './CompactStepper';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <CompactStepper onValueChange={value=>console.info(value)}/>; }
