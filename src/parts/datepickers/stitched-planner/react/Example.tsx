import React from 'react';
import StitchedPlanner from './StitchedPlanner';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <StitchedPlanner onValueChange={value=>console.info(value)}/>; }
