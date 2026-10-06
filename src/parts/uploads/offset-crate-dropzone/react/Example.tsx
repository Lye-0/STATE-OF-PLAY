import React from 'react';
import OffsetCrateDropzone from './OffsetCrateDropzone';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <OffsetCrateDropzone onValueChange={value=>console.info(value)}/>; }
