import React from 'react';
import BracedNotePopover from './BracedNotePopover';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <BracedNotePopover onValueChange={value=>console.info(value)}/>; }
