import React from 'react';
import ContourChoice from './ContourChoice';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <ContourChoice onValueChange={value=>console.info(value)}/>; }
