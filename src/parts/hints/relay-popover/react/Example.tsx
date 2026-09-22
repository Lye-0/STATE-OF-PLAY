import React from 'react';
import RelayPopover from './RelayPopover';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <RelayPopover onValueChange={value=>console.info(value)}/>; }
