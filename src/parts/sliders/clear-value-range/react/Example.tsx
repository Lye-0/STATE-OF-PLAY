import React from 'react';
import ClearValueRange from './ClearValueRange';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <ClearValueRange onValueChange={value=>console.info(value)}/>; }
