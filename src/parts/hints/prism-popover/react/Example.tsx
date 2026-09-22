import React from 'react';
import PrismPopover from './PrismPopover';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <PrismPopover onValueChange={value=>console.info(value)}/>; }
