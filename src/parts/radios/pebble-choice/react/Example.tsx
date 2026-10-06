import React from 'react';
import PebbleChoice from './PebbleChoice';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <PebbleChoice onValueChange={value=>console.info(value)}/>; }
