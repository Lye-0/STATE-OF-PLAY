import React from 'react';
import ClockfaceProgress from './ClockfaceProgress';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <ClockfaceProgress onValueChange={value=>console.info(value)}/>; }
