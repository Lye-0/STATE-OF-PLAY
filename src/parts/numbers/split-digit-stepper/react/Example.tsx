import React from 'react';
import SplitDigitStepper from './SplitDigitStepper';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <SplitDigitStepper onValueChange={value=>console.info(value)}/>; }
