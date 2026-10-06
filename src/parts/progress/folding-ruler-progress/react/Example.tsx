import React from 'react';
import FoldingRulerProgress from './FoldingRulerProgress';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <FoldingRulerProgress onValueChange={value=>console.info(value)}/>; }
