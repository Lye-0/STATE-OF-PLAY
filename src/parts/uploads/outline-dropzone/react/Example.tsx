import React from 'react';
import OutlineDropzone from './OutlineDropzone';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <OutlineDropzone onValueChange={value=>console.info(value)}/>; }
