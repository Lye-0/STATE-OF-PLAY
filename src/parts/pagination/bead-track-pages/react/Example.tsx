import React from 'react';
import BeadTrackPages from './BeadTrackPages';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <BeadTrackPages onValueChange={value=>console.info(value)}/>; }
