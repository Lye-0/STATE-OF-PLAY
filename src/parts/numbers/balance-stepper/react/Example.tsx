import React from 'react';
import BalanceStepper from './BalanceStepper';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <BalanceStepper onValueChange={value=>console.info(value)}/>; }
