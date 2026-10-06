import React from 'react';
import BracketPages from './BracketPages';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <BracketPages onValueChange={value=>console.info(value)}/>; }
