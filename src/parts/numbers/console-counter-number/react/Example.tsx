import React from 'react';
import ConsoleCounterNumber from './ConsoleCounterNumber';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <ConsoleCounterNumber onValueChange={value=>console.info(value)}/>; }
