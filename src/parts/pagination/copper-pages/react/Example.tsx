import React from 'react';
import CopperPages from './CopperPages';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <CopperPages onValueChange={value=>console.info(value)}/>; }
