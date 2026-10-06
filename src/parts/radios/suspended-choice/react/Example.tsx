import React from 'react';
import SuspendedChoice from './SuspendedChoice';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <SuspendedChoice onValueChange={value=>console.info(value)}/>; }
