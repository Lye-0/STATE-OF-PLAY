import React from 'react';
import NixieStepper from './NixieStepper';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <NixieStepper onValueChange={value=>console.info(value)}/>; }
