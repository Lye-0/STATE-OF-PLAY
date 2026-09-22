import React from 'react';
import NixieDropzone from './NixieDropzone';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <NixieDropzone onValueChange={value=>console.info(value)}/>; }
