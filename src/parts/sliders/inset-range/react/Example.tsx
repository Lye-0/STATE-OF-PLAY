import React from 'react';
import InsetRange from './InsetRange';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <InsetRange onValueChange={value=>console.info(value)}/>; }
