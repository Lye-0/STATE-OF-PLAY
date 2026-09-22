import React from 'react';
import EssentialStepper from './EssentialStepper';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <EssentialStepper onValueChange={value=>console.info(value)}/>; }
