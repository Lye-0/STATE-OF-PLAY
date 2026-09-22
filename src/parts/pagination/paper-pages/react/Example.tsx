import React from 'react';
import PaperPages from './PaperPages';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <PaperPages onValueChange={value=>console.info(value)}/>; }
