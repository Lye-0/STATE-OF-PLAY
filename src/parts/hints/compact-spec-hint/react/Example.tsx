import React from 'react';
import CompactSpecHint from './CompactSpecHint';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <CompactSpecHint onValueChange={value=>console.info(value)}/>; }
