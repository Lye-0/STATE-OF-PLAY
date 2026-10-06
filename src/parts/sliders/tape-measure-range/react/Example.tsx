import React from 'react';
import TapeMeasureRange from './TapeMeasureRange';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <TapeMeasureRange onValueChange={value=>console.info(value)}/>; }
