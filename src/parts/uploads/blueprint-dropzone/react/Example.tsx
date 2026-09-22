import React from 'react';
import BlueprintDropzone from './BlueprintDropzone';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <BlueprintDropzone onValueChange={value=>console.info(value)}/>; }
