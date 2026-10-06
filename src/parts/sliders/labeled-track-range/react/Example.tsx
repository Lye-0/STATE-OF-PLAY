import React from 'react';
import LabeledTrackRange from './LabeledTrackRange';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <LabeledTrackRange onValueChange={value=>console.info(value)}/>; }
