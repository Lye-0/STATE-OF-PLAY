import React from 'react';
import AuroraLoader from './AuroraLoader';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <AuroraLoader onValueChange={value=>console.info(value)}/>; }
