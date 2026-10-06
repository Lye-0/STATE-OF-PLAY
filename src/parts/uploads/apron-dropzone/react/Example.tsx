import React from 'react';
import ApronDropzone from './ApronDropzone';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <ApronDropzone onValueChange={value=>console.info(value)}/>; }
