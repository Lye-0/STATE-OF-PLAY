import React from 'react';
import BookendNoteHint from './BookendNoteHint';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <BookendNoteHint onValueChange={value=>console.info(value)}/>; }
