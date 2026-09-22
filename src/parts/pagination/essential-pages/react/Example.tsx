import React from 'react';
import EssentialPages from './EssentialPages';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <EssentialPages onValueChange={value=>console.info(value)}/>; }
