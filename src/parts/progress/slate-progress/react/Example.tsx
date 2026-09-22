import React from 'react';
import SlateProgress from './SlateProgress';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <SlateProgress onValueChange={value=>console.info(value)}/>; }
