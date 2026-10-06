import React from 'react';
import ArchiveBinDropzone from './ArchiveBinDropzone';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <ArchiveBinDropzone onValueChange={value=>console.info(value)}/>; }
