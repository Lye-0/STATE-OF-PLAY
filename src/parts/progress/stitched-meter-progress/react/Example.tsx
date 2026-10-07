import React from 'react';
import StitchedMeterProgress from './StitchedMeterProgress';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <StitchedMeterProgress onValueChange={value=>console.info(value)}/>; }
