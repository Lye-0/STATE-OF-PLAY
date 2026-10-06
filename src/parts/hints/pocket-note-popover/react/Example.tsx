import React from 'react';
import PocketNotePopover from './PocketNotePopover';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <PocketNotePopover onValueChange={value=>console.info(value)}/>; }
