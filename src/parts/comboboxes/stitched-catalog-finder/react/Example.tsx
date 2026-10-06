import React from 'react';
import StitchedCatalogFinder from './StitchedCatalogFinder';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <StitchedCatalogFinder onValueChange={value=>console.info(value)}/>; }
