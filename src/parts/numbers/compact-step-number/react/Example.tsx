import React from 'react';
import CompactStepNumber from './CompactStepNumber';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <CompactStepNumber onValueChange={value=>console.info(value)}/>; }
