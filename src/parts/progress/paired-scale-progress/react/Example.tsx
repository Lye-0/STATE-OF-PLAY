import React from 'react';
import PairedScaleProgress from './PairedScaleProgress';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <PairedScaleProgress onValueChange={value=>console.info(value)}/>; }
