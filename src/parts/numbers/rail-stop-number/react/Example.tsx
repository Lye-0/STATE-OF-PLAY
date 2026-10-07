import React from 'react';
import RailStopNumber from './RailStopNumber';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <RailStopNumber onValueChange={value=>console.info(value)}/>; }
