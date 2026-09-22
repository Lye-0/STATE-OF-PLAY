import React from 'react';
import PrismChoice from './PrismChoice';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <PrismChoice onValueChange={value=>console.info(value)}/>; }
