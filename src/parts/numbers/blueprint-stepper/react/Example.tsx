import React from 'react';
import BlueprintStepper from './BlueprintStepper';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <BlueprintStepper onValueChange={value=>console.info(value)}/>; }
