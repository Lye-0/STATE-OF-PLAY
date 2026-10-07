import React from 'react';
import CompactDataPages from './CompactDataPages';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <CompactDataPages onValueChange={value=>console.info(value)}/>; }
