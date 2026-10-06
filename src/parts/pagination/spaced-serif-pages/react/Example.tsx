import React from 'react';
import SpacedSerifPages from './SpacedSerifPages';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <SpacedSerifPages onValueChange={value=>console.info(value)}/>; }
