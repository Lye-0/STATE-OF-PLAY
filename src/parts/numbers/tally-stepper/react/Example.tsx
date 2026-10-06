import React from 'react';
import TallyStepper from './TallyStepper';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <TallyStepper onValueChange={value=>console.info(value)}/>; }
