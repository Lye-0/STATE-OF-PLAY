import React from 'react';
import OutlineStepNumber from './OutlineStepNumber';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <OutlineStepNumber onValueChange={value=>console.info(value)}/>; }
