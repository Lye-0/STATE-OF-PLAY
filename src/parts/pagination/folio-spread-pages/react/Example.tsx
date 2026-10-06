import React from 'react';
import FolioSpreadPages from './FolioSpreadPages';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <FolioSpreadPages onValueChange={value=>console.info(value)}/>; }
