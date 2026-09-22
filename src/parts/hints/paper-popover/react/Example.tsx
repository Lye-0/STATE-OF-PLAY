import React from 'react';
import PaperPopover from './PaperPopover';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <PaperPopover onValueChange={value=>console.info(value)}/>; }
