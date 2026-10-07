import React from 'react';
import CaptionBandProgress from './CaptionBandProgress';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <CaptionBandProgress onValueChange={value=>console.info(value)}/>; }
