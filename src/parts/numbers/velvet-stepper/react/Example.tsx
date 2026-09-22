import React from 'react';
import VelvetStepper from './VelvetStepper';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <VelvetStepper onValueChange={value=>console.info(value)}/>; }
