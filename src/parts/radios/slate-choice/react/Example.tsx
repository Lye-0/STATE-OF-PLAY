import React from 'react';
import SlateChoice from './SlateChoice';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <SlateChoice onValueChange={value=>console.info(value)}/>; }
