import React from 'react';
import TrackStopPages from './TrackStopPages';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <TrackStopPages onValueChange={value=>console.info(value)}/>; }
