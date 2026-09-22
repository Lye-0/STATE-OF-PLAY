import React from 'react';
import NixieLoader from './NixieLoader';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <NixieLoader onValueChange={value=>console.info(value)}/>; }
