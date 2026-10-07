import React from 'react';
import OpenBracketPages from './OpenBracketPages';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <OpenBracketPages onValueChange={value=>console.info(value)}/>; }
