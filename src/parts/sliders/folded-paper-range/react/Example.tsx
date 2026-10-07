import React from 'react';
import FoldedPaperRange from './FoldedPaperRange';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <FoldedPaperRange onValueChange={value=>console.info(value)}/>; }
