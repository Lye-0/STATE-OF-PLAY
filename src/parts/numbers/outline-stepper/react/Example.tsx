import React from 'react';
import OutlineStepper from './OutlineStepper';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <OutlineStepper onValueChange={value=>console.info(value)}/>; }
