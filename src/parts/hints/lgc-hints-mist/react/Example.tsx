import React from 'react';
import LgcHintsMist from './LgcHintsMist';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <LgcHintsMist onValueChange={value=>console.info(value)}/>; }
