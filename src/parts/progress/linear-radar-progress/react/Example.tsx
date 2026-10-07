import React from 'react';
import LinearRadarProgress from './LinearRadarProgress';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <LinearRadarProgress onValueChange={value=>console.info(value)}/>; }
