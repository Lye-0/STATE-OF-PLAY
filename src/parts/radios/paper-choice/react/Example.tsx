import React from 'react';
import PaperChoice from './PaperChoice';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <PaperChoice onValueChange={value=>console.info(value)}/>; }
