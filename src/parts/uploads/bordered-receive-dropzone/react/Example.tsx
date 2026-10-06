import React from 'react';
import BorderedReceiveDropzone from './BorderedReceiveDropzone';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <BorderedReceiveDropzone onValueChange={value=>console.info(value)}/>; }
