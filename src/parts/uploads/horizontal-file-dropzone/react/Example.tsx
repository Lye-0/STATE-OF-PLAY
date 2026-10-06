import React from 'react';
import HorizontalFileDropzone from './HorizontalFileDropzone';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <HorizontalFileDropzone onValueChange={value=>console.info(value)}/>; }
