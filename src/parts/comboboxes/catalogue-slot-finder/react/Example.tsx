import React from 'react';
import CatalogueSlotFinder from './CatalogueSlotFinder';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <CatalogueSlotFinder onValueChange={value=>console.info(value)}/>; }
