import React from 'react';
import CopperDropzone from './CopperDropzone';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <CopperDropzone onValueChange={value=>console.info(value)}/>; }
