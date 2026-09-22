import React from 'react';
import InsetChoice from './InsetChoice';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <InsetChoice onValueChange={value=>console.info(value)}/>; }
