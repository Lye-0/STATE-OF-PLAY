import React from 'react';
import FolioProgress from './FolioProgress';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <FolioProgress onValueChange={value=>console.info(value)}/>; }
