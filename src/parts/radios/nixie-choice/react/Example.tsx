import React from 'react';
import NixieChoice from './NixieChoice';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <NixieChoice onValueChange={value=>console.info(value)}/>; }
