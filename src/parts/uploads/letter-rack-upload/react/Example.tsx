import React from 'react';
import LetterRackUpload from './LetterRackUpload';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <LetterRackUpload onValueChange={value=>console.info(value)}/>; }
