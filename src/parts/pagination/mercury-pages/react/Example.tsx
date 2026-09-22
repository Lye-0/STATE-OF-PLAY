import React from 'react';
import MercuryPages from './MercuryPages';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <MercuryPages onValueChange={value=>console.info(value)}/>; }
