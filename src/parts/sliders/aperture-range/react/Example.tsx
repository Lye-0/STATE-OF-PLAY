import React from 'react';
import ApertureRange from './ApertureRange';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <ApertureRange onValueChange={value=>console.info(value)}/>; }
