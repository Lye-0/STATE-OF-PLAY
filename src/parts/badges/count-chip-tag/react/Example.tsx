import React from 'react';
import CountChipTag from './CountChipTag';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <CountChipTag onValueChange={value=>console.info(value)}/>; }
