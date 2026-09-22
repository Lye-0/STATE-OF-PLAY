import React from 'react';
import ContourProgress from './ContourProgress';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <ContourProgress onValueChange={value=>console.info(value)}/>; }
