import React from 'react';
import RibbonQueryFinder from './RibbonQueryFinder';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <RibbonQueryFinder onValueChange={value=>console.info(value)}/>; }
