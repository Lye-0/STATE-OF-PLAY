import React from 'react';
import VernierRange from './VernierRange';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <VernierRange onValueChange={value=>console.info(value)}/>; }
