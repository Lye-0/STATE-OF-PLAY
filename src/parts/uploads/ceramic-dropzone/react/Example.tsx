import React from 'react';
import CeramicDropzone from './CeramicDropzone';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <CeramicDropzone onValueChange={value=>console.info(value)}/>; }
