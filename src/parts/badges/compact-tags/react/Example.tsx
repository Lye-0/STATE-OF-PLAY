import React from 'react';
import CompactTags from './CompactTags';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <CompactTags onValueChange={value=>console.info(value)}/>; }
