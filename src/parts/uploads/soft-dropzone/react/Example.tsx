import React from 'react';
import SoftDropzone from './SoftDropzone';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <SoftDropzone onValueChange={value=>console.info(value)}/>; }
