import React from 'react';
import PlainFileUpload from './PlainFileUpload';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <PlainFileUpload onValueChange={value=>console.info(value)}/>; }
