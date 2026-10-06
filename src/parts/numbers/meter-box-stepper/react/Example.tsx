import React from 'react';
import MeterBoxStepper from './MeterBoxStepper';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <MeterBoxStepper onValueChange={value=>console.info(value)}/>; }
