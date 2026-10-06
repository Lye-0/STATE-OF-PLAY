import React from 'react';
import CurrentLocationTrail from './CurrentLocationTrail';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <CurrentLocationTrail onValueChange={value=>console.info(value)}/>; }
