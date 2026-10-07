import React from 'react';
import BridgeControlNumber from './BridgeControlNumber';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <BridgeControlNumber onValueChange={value=>console.info(value)}/>; }
