import React from 'react';
import CompactMetadataTags from './CompactMetadataTags';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <CompactMetadataTags onValueChange={value=>console.info(value)}/>; }
