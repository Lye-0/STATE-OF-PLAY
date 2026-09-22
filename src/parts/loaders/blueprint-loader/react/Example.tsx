import React from 'react';
import BlueprintLoader from './BlueprintLoader';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <BlueprintLoader onValueChange={value=>console.info(value)}/>; }
