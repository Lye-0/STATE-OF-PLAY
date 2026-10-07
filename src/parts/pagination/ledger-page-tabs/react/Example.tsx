import React from 'react';
import LedgerPageTabs from './LedgerPageTabs';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <LedgerPageTabs onValueChange={value=>console.info(value)}/>; }
