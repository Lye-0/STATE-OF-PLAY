import React from 'react';
import VelvetDropzone from './VelvetDropzone';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <VelvetDropzone onValueChange={value=>console.info(value)}/>; }
