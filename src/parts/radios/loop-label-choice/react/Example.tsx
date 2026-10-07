import React from 'react';
import LoopLabelChoice from './LoopLabelChoice';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <LoopLabelChoice onValueChange={value=>console.info(value)}/>; }
