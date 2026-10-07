import React from 'react';
import PerforatedCounter from './PerforatedCounter';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <PerforatedCounter onValueChange={value=>console.info(value)}/>; }
