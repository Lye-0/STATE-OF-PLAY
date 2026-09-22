import React from 'react';
import SlateDropzone from './SlateDropzone';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <SlateDropzone onValueChange={value=>console.info(value)}/>; }
