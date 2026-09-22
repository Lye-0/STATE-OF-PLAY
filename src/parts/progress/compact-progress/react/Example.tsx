import React from 'react';
import CompactProgress from './CompactProgress';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <CompactProgress onValueChange={value=>console.info(value)}/>; }
