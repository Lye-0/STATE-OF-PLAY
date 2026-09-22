import React from 'react';
import ApertureLoader from './ApertureLoader';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <ApertureLoader onValueChange={value=>console.info(value)}/>; }
