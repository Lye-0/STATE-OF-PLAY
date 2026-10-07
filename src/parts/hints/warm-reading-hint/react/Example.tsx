import React from 'react';
import WarmReadingHint from './WarmReadingHint';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <WarmReadingHint onValueChange={value=>console.info(value)}/>; }
