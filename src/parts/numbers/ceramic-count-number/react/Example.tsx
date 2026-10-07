import React from 'react';
import CeramicCountNumber from './CeramicCountNumber';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <CeramicCountNumber onValueChange={value=>console.info(value)}/>; }
