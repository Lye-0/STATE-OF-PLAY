import React from 'react';
import InstrumentDate from './InstrumentDate';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <InstrumentDate onValueChange={value=>console.info(value)}/>; }
