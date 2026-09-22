import React from 'react';
import EssentialDropzone from './EssentialDropzone';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <EssentialDropzone onValueChange={value=>console.info(value)}/>; }
