import React from 'react';
import MarginBracketHint from './MarginBracketHint';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <MarginBracketHint onValueChange={value=>console.info(value)}/>; }
