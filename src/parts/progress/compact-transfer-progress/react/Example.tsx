import React from 'react';
import CompactTransferProgress from './CompactTransferProgress';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <CompactTransferProgress onValueChange={value=>console.info(value)}/>; }
