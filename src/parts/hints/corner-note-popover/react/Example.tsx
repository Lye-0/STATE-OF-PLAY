import React from 'react';
import CornerNotePopover from './CornerNotePopover';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <CornerNotePopover onValueChange={value=>console.info(value)}/>; }
