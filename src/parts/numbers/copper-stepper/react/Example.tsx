import React from 'react';
import CopperStepper from './CopperStepper';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <CopperStepper onValueChange={value=>console.info(value)}/>; }
