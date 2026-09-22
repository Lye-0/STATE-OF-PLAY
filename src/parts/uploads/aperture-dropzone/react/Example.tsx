import React from 'react';
import ApertureDropzone from './ApertureDropzone';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <ApertureDropzone onValueChange={value=>console.info(value)}/>; }
