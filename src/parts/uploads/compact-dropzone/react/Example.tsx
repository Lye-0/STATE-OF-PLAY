import React from 'react';
import CompactDropzone from './CompactDropzone';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <CompactDropzone onValueChange={value=>console.info(value)}/>; }
