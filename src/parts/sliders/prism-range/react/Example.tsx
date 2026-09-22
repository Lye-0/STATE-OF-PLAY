import React from 'react';
import PrismRange from './PrismRange';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <PrismRange onValueChange={value=>console.info(value)}/>; }
