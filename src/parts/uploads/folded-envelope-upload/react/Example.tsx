import React from 'react';
import FoldedEnvelopeUpload from './FoldedEnvelopeUpload';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <FoldedEnvelopeUpload onValueChange={value=>console.info(value)}/>; }
