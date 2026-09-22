import React from 'react';
import PrismProgress from './PrismProgress';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <PrismProgress onValueChange={value=>console.info(value)}/>; }
