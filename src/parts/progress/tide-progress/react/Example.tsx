import React from 'react';
import TideProgress from './TideProgress';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <TideProgress onValueChange={value=>console.info(value)}/>; }
