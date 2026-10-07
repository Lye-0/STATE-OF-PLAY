import React from 'react';
import StoneRecessUpload from './StoneRecessUpload';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <StoneRecessUpload onValueChange={value=>console.info(value)}/>; }
