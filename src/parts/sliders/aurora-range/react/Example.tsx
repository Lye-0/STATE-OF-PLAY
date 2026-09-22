import React from 'react';
import AuroraRange from './AuroraRange';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <AuroraRange onValueChange={value=>console.info(value)}/>; }
