import React from 'react';
import TideDropzone from './TideDropzone';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <TideDropzone onValueChange={value=>console.info(value)}/>; }
