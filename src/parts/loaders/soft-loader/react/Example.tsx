import React from 'react';
import SoftLoader from './SoftLoader';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <SoftLoader onValueChange={value=>console.info(value)}/>; }
