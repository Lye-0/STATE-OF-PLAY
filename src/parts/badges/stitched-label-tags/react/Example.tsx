import React from 'react';
import StitchedLabelTags from './StitchedLabelTags';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <StitchedLabelTags onValueChange={value=>console.info(value)}/>; }
