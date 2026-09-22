import React from 'react';
import FolioDropzone from './FolioDropzone';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <FolioDropzone onValueChange={value=>console.info(value)}/>; }
