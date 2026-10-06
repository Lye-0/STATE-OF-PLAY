import React from 'react';
import FoldLineTag from './FoldLineTag';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <FoldLineTag onValueChange={value=>console.info(value)}/>; }
