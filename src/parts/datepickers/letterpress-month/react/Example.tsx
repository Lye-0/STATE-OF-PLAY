import React from 'react';
import LetterpressMonth from './LetterpressMonth';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <LetterpressMonth onValueChange={value=>console.info(value)}/>; }
