import React from 'react';
import FoldedIndexTrail from './FoldedIndexTrail';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <FoldedIndexTrail onValueChange={value=>console.info(value)}/>; }
