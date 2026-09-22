import React from 'react';
import MercuryStepper from './MercuryStepper';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <MercuryStepper onValueChange={value=>console.info(value)}/>; }
