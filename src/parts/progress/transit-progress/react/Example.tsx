import React from 'react';
import TransitProgress from './TransitProgress';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <TransitProgress onValueChange={value=>console.info(value)}/>; }
