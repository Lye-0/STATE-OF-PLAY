import React from 'react';
import FileBerthDropzone from './FileBerthDropzone';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <FileBerthDropzone onValueChange={value=>console.info(value)}/>; }
