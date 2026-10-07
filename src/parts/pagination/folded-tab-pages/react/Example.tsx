import React from 'react';
import FoldedTabPages from './FoldedTabPages';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <FoldedTabPages onValueChange={value=>console.info(value)}/>; }
