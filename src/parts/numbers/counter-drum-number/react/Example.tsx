import React from 'react';
import CounterDrumNumber from './CounterDrumNumber';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <CounterDrumNumber onValueChange={value=>console.info(value)}/>; }
