import React from 'react';
import LoopedNoteHint from './LoopedNoteHint';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <LoopedNoteHint onValueChange={value=>console.info(value)}/>; }
