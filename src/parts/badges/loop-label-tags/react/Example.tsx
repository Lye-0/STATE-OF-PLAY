import React from 'react';
import LoopLabelTags from './LoopLabelTags';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <LoopLabelTags onValueChange={value=>console.info(value)}/>; }
