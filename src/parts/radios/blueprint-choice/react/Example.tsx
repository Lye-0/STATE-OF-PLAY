import React from 'react';
import BlueprintChoice from './BlueprintChoice';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <BlueprintChoice onValueChange={value=>console.info(value)}/>; }
