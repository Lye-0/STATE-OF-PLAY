import React from 'react';
import RailCaptionHint from './RailCaptionHint';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <RailCaptionHint onValueChange={value=>console.info(value)}/>; }
