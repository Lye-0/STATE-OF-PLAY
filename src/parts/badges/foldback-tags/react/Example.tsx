import React from 'react';
import FoldbackTags from './FoldbackTags';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <FoldbackTags onValueChange={value=>console.info(value)}/>; }
