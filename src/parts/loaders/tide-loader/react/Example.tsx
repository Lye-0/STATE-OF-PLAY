import React from 'react';
import TideLoader from './TideLoader';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <TideLoader onValueChange={value=>console.info(value)}/>; }
