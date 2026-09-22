import React from 'react';
import CompactRange from './CompactRange';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <CompactRange onValueChange={value=>console.info(value)}/>; }
