import React from 'react';
import InsetStepper from './InsetStepper';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <InsetStepper onValueChange={value=>console.info(value)}/>; }
