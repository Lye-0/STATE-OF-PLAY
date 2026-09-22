import React from 'react';
import FolioTrail from './FolioTrail';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <FolioTrail onValueChange={value=>console.info(value)}/>; }
