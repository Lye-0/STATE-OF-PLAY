import React from 'react';
import PrismLoader from './PrismLoader';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <PrismLoader onValueChange={value=>console.info(value)}/>; }
