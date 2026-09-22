import React from 'react';
import InsetDropzone from './InsetDropzone';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <InsetDropzone onValueChange={value=>console.info(value)}/>; }
