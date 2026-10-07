import React from 'react';
import StitchedCountNumber from './StitchedCountNumber';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <StitchedCountNumber onValueChange={value=>console.info(value)}/>; }
