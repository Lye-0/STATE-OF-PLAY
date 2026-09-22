import React from 'react';
import TransitRange from './TransitRange';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <TransitRange onValueChange={value=>console.info(value)}/>; }
