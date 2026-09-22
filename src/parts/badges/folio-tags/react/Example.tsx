import React from 'react';
import FolioTags from './FolioTags';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <FolioTags onValueChange={value=>console.info(value)}/>; }
