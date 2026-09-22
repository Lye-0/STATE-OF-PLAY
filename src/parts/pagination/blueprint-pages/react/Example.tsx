import React from 'react';
import BlueprintPages from './BlueprintPages';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <BlueprintPages onValueChange={value=>console.info(value)}/>; }
