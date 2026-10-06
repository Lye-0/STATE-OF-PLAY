import React from 'react';
import SuspendedPages from './SuspendedPages';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <SuspendedPages onValueChange={value=>console.info(value)}/>; }
