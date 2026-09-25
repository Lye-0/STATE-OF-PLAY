import React from 'react';
import LgcNumbersMist from './LgcNumbersMist';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <LgcNumbersMist onValueChange={value=>console.info(value)}/>; }
