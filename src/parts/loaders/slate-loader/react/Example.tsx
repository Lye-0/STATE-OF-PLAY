import React from 'react';
import SlateLoader from './SlateLoader';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <SlateLoader onValueChange={value=>console.info(value)}/>; }
