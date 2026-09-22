import React from 'react';
import ContourTags from './ContourTags';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <ContourTags onValueChange={value=>console.info(value)}/>; }
