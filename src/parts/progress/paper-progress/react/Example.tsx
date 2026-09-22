import React from 'react';
import PaperProgress from './PaperProgress';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <PaperProgress onValueChange={value=>console.info(value)}/>; }
