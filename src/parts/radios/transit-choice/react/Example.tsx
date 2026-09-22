import React from 'react';
import TransitChoice from './TransitChoice';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <TransitChoice onValueChange={value=>console.info(value)}/>; }
