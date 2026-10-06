import React from 'react';
import DividerPages from './DividerPages';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <DividerPages onValueChange={value=>console.info(value)}/>; }
