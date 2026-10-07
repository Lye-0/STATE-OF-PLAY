import React from 'react';
import PlainResultPages from './PlainResultPages';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <PlainResultPages onValueChange={value=>console.info(value)}/>; }
