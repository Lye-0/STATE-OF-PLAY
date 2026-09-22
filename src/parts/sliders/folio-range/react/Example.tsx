import React from 'react';
import FolioRange from './FolioRange';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <FolioRange onValueChange={value=>console.info(value)}/>; }
