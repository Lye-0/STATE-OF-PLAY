import React from 'react';
import FoldedTallyNumber from './FoldedTallyNumber';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <FoldedTallyNumber onValueChange={value=>console.info(value)}/>; }
