import React from 'react';
import FileListDropzone from './FileListDropzone';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <FileListDropzone onValueChange={value=>console.info(value)}/>; }
