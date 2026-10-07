import React from 'react';
import StoneChipTags from './StoneChipTags';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <StoneChipTags onValueChange={value=>console.info(value)}/>; }
