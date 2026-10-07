import React from 'react';
import CanvasBinUpload from './CanvasBinUpload';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <CanvasBinUpload onValueChange={value=>console.info(value)}/>; }
