import React from 'react';
import ArchiveRouteTrail from './ArchiveRouteTrail';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <ArchiveRouteTrail onValueChange={value=>console.info(value)}/>; }
