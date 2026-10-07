import React from 'react';
import RecessedChipTags from './RecessedChipTags';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <RecessedChipTags onValueChange={value=>console.info(value)}/>; }
