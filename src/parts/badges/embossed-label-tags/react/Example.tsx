import React from 'react';
import EmbossedLabelTags from './EmbossedLabelTags';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <EmbossedLabelTags onValueChange={value=>console.info(value)}/>; }
