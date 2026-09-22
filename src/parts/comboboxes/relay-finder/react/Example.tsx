import React from 'react';
import RelayFinder from './RelayFinder';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <RelayFinder onValueChange={value=>console.info(value)}/>; }
