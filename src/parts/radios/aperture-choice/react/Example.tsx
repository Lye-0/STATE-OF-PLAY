import React from 'react';
import ApertureChoice from './ApertureChoice';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <ApertureChoice onValueChange={value=>console.info(value)}/>; }
