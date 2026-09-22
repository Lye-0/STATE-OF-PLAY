import React from 'react';
import AuroraProgress from './AuroraProgress';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <AuroraProgress onValueChange={value=>console.info(value)}/>; }
