import React from 'react';
import WideLabelFinder from './WideLabelFinder';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <WideLabelFinder onValueChange={value=>console.info(value)}/>; }
