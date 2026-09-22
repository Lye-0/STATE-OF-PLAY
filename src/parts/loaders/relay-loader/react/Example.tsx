import React from 'react';
import RelayLoader from './RelayLoader';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <RelayLoader onValueChange={value=>console.info(value)}/>; }
