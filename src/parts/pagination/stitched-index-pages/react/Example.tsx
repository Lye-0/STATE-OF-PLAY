import React from 'react';
import StitchedIndexPages from './StitchedIndexPages';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <StitchedIndexPages onValueChange={value=>console.info(value)}/>; }
