import React from 'react';
import FolioChoice from './FolioChoice';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <FolioChoice onValueChange={value=>console.info(value)}/>; }
