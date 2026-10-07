import React from 'react';
import SpoolDialProgress from './SpoolDialProgress';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <SpoolDialProgress onValueChange={value=>console.info(value)}/>; }
