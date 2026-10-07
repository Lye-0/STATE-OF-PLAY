import React from 'react';
import LedgerGutterFinder from './LedgerGutterFinder';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <LedgerGutterFinder onValueChange={value=>console.info(value)}/>; }
