import React from 'react';
import CeramicStepper from './CeramicStepper';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <CeramicStepper onValueChange={value=>console.info(value)}/>; }
