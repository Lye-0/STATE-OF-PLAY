import React from 'react';
import ClipFrameDropzone from './ClipFrameDropzone';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <ClipFrameDropzone onValueChange={value=>console.info(value)}/>; }
