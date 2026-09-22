import React from 'react';
import ApertureProgress from './ApertureProgress';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <ApertureProgress onValueChange={value=>console.info(value)}/>; }
