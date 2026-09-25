import React from 'react';
import LgcUploadsMist from './LgcUploadsMist';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <LgcUploadsMist onValueChange={value=>console.info(value)}/>; }
