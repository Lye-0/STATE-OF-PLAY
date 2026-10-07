import React from 'react';
import MarginLinePages from './MarginLinePages';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <MarginLinePages onValueChange={value=>console.info(value)}/>; }
