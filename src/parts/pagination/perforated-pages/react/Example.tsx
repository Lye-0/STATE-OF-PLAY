import React from 'react';
import PerforatedPages from './PerforatedPages';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <PerforatedPages onValueChange={value=>console.info(value)}/>; }
