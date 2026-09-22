import React from 'react';
import BlueprintTags from './BlueprintTags';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <BlueprintTags onValueChange={value=>console.info(value)}/>; }
