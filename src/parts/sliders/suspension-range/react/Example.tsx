import React from 'react';
import SuspensionRange from './SuspensionRange';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <SuspensionRange onValueChange={value=>console.info(value)}/>; }
