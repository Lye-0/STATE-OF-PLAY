import React from 'react';
import PrismTags from './PrismTags';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <PrismTags onValueChange={value=>console.info(value)}/>; }
