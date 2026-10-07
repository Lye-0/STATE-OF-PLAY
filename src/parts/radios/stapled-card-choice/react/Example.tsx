import React from 'react';
import StapledCardChoice from './StapledCardChoice';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <StapledCardChoice onValueChange={value=>console.info(value)}/>; }
