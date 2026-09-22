import React from 'react';
import CopperRange from './CopperRange';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <CopperRange onValueChange={value=>console.info(value)}/>; }
