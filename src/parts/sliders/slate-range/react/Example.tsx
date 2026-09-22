import React from 'react';
import SlateRange from './SlateRange';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <SlateRange onValueChange={value=>console.info(value)}/>; }
