import React from 'react';
import LedgerMarginTrail from './LedgerMarginTrail';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <LedgerMarginTrail onValueChange={value=>console.info(value)}/>; }
