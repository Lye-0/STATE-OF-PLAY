import React from 'react';
import LetterpressTrail from './LetterpressTrail';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <LetterpressTrail onValueChange={value=>console.info(value)}/>; }
