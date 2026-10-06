import React from 'react';
import CaptionBandTag from './CaptionBandTag';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <CaptionBandTag onValueChange={value=>console.info(value)}/>; }
