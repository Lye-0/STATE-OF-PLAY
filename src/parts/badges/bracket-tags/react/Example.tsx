import React from 'react';
import BracketTags from './BracketTags';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <BracketTags onValueChange={value=>console.info(value)}/>; }
