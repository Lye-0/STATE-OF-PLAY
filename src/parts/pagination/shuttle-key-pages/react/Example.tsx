import React from 'react';
import ShuttleKeyPages from './ShuttleKeyPages';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <ShuttleKeyPages onValueChange={value=>console.info(value)}/>; }
