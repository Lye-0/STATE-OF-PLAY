import React from 'react';
import KnurledStepper from './KnurledStepper';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <KnurledStepper onValueChange={value=>console.info(value)}/>; }
