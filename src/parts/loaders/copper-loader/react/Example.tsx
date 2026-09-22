import React from 'react';
import CopperLoader from './CopperLoader';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <CopperLoader onValueChange={value=>console.info(value)}/>; }
