import React from 'react';
import TransitTags from './TransitTags';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <TransitTags onValueChange={value=>console.info(value)}/>; }
