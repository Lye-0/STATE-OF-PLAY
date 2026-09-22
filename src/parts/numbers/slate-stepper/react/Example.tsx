import React from 'react';
import SlateStepper from './SlateStepper';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <SlateStepper onValueChange={value=>console.info(value)}/>; }
