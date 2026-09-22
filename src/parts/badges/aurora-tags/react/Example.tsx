import React from 'react';
import AuroraTags from './AuroraTags';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <AuroraTags onValueChange={value=>console.info(value)}/>; }
