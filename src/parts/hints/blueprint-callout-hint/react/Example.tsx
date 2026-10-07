import React from 'react';
import BlueprintCalloutHint from './BlueprintCalloutHint';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <BlueprintCalloutHint onValueChange={value=>console.info(value)}/>; }
