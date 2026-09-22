import React from 'react';
import NixieTags from './NixieTags';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <NixieTags onValueChange={value=>console.info(value)}/>; }
