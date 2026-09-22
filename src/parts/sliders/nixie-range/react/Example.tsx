import React from 'react';
import NixieRange from './NixieRange';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <NixieRange onValueChange={value=>console.info(value)}/>; }
