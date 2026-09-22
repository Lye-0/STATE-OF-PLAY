import React from 'react';
import SoftRange from './SoftRange';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <SoftRange onValueChange={value=>console.info(value)}/>; }
