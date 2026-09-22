import React from 'react';
import SoftStepper from './SoftStepper';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <SoftStepper onValueChange={value=>console.info(value)}/>; }
