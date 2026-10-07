import React from 'react';
import WarmBookPages from './WarmBookPages';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <WarmBookPages onValueChange={value=>console.info(value)}/>; }
