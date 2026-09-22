import React from 'react';
import PaperTags from './PaperTags';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <PaperTags onValueChange={value=>console.info(value)}/>; }
