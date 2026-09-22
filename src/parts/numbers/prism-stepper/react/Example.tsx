import React from 'react';
import PrismStepper from './PrismStepper';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <PrismStepper onValueChange={value=>console.info(value)}/>; }
