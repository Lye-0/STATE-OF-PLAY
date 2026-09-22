import React from 'react';
import BlueprintRange from './BlueprintRange';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <BlueprintRange onValueChange={value=>console.info(value)}/>; }
