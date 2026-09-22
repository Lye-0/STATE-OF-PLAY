import React from 'react';
import CompactPages from './CompactPages';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <CompactPages onValueChange={value=>console.info(value)}/>; }
