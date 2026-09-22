import React from 'react';
import CeramicProgress from './CeramicProgress';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <CeramicProgress onValueChange={value=>console.info(value)}/>; }
