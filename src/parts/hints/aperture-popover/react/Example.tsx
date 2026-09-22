import React from 'react';
import AperturePopover from './AperturePopover';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <AperturePopover onValueChange={value=>console.info(value)}/>; }
