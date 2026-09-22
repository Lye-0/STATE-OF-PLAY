import React from 'react';
import EssentialChoice from './EssentialChoice';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <EssentialChoice onValueChange={value=>console.info(value)}/>; }
