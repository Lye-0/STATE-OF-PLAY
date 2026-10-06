import React from 'react';
import SheetMarginFinder from './SheetMarginFinder';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <SheetMarginFinder onValueChange={value=>console.info(value)}/>; }
