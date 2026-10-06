import React from 'react';
import SpecimenDropzone from './SpecimenDropzone';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <SpecimenDropzone onValueChange={value=>console.info(value)}/>; }
