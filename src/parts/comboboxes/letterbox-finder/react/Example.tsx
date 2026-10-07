import React from 'react';
import LetterboxFinder from './LetterboxFinder';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <LetterboxFinder onValueChange={value=>console.info(value)}/>; }
