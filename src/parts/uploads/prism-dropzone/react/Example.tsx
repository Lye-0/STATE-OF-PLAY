import React from 'react';
import PrismDropzone from './PrismDropzone';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <PrismDropzone onValueChange={value=>console.info(value)}/>; }
