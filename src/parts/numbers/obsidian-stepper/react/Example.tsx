import React from 'react';
import ObsidianStepper from './ObsidianStepper';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <ObsidianStepper onValueChange={value=>console.info(value)}/>; }
