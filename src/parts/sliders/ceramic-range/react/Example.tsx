import React from 'react';
import CeramicRange from './CeramicRange';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <CeramicRange onValueChange={value=>console.info(value)}/>; }
