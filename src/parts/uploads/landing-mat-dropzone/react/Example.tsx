import React from 'react';
import LandingMatDropzone from './LandingMatDropzone';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <LandingMatDropzone onValueChange={value=>console.info(value)}/>; }
