import React from 'react';
import TideStepper from './TideStepper';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <TideStepper onValueChange={value=>console.info(value)}/>; }
