import React from 'react';
import CompactPopover from './CompactPopover';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <CompactPopover onValueChange={value=>console.info(value)}/>; }
