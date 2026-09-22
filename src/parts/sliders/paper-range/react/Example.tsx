import React from 'react';
import PaperRange from './PaperRange';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <PaperRange onValueChange={value=>console.info(value)}/>; }
