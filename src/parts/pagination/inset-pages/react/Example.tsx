import React from 'react';
import InsetPages from './InsetPages';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <InsetPages onValueChange={value=>console.info(value)}/>; }
