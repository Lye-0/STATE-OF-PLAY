import React from 'react';
import ContourLoader from './ContourLoader';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <ContourLoader onValueChange={value=>console.info(value)}/>; }
