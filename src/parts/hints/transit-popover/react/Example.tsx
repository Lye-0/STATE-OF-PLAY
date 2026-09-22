import React from 'react';
import TransitPopover from './TransitPopover';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <TransitPopover onValueChange={value=>console.info(value)}/>; }
