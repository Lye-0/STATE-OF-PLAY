import React from 'react';
import EssentialRange from './EssentialRange';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <EssentialRange onValueChange={value=>console.info(value)}/>; }
