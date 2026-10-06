import React from 'react';
import TabbedChoice from './TabbedChoice';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <TabbedChoice onValueChange={value=>console.info(value)}/>; }
