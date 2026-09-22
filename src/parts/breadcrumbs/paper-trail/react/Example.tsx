import React from 'react';
import PaperTrail from './PaperTrail';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <PaperTrail onValueChange={value=>console.info(value)}/>; }
