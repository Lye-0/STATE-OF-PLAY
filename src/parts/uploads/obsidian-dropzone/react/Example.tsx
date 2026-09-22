import React from 'react';
import ObsidianDropzone from './ObsidianDropzone';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <ObsidianDropzone onValueChange={value=>console.info(value)}/>; }
