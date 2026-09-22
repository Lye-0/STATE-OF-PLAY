import React from 'react';
import CopperPopover from './CopperPopover';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <CopperPopover onValueChange={value=>console.info(value)}/>; }
