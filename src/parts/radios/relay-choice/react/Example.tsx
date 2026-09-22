import React from 'react';
import RelayChoice from './RelayChoice';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <RelayChoice onValueChange={value=>console.info(value)}/>; }
