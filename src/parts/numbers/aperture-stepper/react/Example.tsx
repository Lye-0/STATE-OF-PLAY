import React from 'react';
import ApertureStepper from './ApertureStepper';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <ApertureStepper onValueChange={value=>console.info(value)}/>; }
