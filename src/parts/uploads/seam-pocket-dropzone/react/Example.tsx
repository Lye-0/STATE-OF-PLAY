import React from 'react';
import SeamPocketDropzone from './SeamPocketDropzone';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <SeamPocketDropzone onValueChange={value=>console.info(value)}/>; }
