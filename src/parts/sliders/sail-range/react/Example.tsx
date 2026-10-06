import React from 'react';
import SailRange from './SailRange';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <SailRange onValueChange={value=>console.info(value)}/>; }
