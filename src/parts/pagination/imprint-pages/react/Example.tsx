import React from 'react';
import ImprintPages from './ImprintPages';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <ImprintPages onValueChange={value=>console.info(value)}/>; }
