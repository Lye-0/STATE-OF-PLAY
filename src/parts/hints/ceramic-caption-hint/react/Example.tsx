import React from 'react';
import CeramicCaptionHint from './CeramicCaptionHint';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <CeramicCaptionHint onValueChange={value=>console.info(value)}/>; }
