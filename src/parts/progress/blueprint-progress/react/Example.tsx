import React from 'react';
import BlueprintProgress from './BlueprintProgress';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <BlueprintProgress onValueChange={value=>console.info(value)}/>; }
