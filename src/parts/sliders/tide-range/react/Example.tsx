import React from 'react';
import TideRange from './TideRange';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <TideRange onValueChange={value=>console.info(value)}/>; }
