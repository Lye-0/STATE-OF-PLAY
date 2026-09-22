import React from 'react';
import CompactLoader from './CompactLoader';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <CompactLoader onValueChange={value=>console.info(value)}/>; }
