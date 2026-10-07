import React from 'react';
import LedgerQuantityNumber from './LedgerQuantityNumber';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <LedgerQuantityNumber onValueChange={value=>console.info(value)}/>; }
