import React from 'react';
import AuroraDropzone from './AuroraDropzone';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <AuroraDropzone onValueChange={value=>console.info(value)}/>; }
