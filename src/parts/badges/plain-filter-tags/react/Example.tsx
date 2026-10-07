import React from 'react';
import PlainFilterTags from './PlainFilterTags';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <PlainFilterTags onValueChange={value=>console.info(value)}/>; }
