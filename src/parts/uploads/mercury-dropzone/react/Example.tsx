import React from 'react';
import MercuryDropzone from './MercuryDropzone';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <MercuryDropzone onValueChange={value=>console.info(value)}/>; }
