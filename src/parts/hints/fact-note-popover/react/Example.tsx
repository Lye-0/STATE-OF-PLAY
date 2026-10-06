import React from 'react';
import FactNotePopover from './FactNotePopover';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <FactNotePopover onValueChange={value=>console.info(value)}/>; }
