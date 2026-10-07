import React from 'react';
import LetterTabChoice from './LetterTabChoice';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <LetterTabChoice onValueChange={value=>console.info(value)}/>; }
