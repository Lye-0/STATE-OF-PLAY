import React from 'react';
import CaptionChoice from './CaptionChoice';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <CaptionChoice onValueChange={value=>console.info(value)}/>; }
