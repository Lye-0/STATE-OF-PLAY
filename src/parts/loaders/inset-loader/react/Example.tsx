import React from 'react';
import InsetLoader from './InsetLoader';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <InsetLoader onValueChange={value=>console.info(value)}/>; }
