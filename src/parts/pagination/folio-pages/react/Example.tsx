import React from 'react';
import FolioPages from './FolioPages';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <FolioPages onValueChange={value=>console.info(value)}/>; }
