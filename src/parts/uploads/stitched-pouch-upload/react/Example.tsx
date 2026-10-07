import React from 'react';
import StitchedPouchUpload from './StitchedPouchUpload';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <StitchedPouchUpload onValueChange={value=>console.info(value)}/>; }
