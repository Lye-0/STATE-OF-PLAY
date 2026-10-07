import React from 'react';
import CargoBayUpload from './CargoBayUpload';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <CargoBayUpload onValueChange={value=>console.info(value)}/>; }
