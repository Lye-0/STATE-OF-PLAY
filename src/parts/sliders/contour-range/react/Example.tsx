import React from 'react';
import ContourRange from './ContourRange';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <ContourRange onValueChange={value=>console.info(value)}/>; }
