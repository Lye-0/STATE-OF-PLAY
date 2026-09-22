import React from 'react';
import PaperLoader from './PaperLoader';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <PaperLoader onValueChange={value=>console.info(value)}/>; }
