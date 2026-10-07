import React from 'react';
import WarmReadingProgress from './WarmReadingProgress';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <WarmReadingProgress onValueChange={value=>console.info(value)}/>; }
