import React from 'react';
import PaperDropzone from './PaperDropzone';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <PaperDropzone onValueChange={value=>console.info(value)}/>; }
