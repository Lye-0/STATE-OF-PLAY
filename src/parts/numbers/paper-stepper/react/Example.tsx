import React from 'react';
import PaperStepper from './PaperStepper';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <PaperStepper onValueChange={value=>console.info(value)}/>; }
