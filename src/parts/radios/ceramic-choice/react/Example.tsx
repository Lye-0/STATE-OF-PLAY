import React from 'react';
import CeramicChoice from './CeramicChoice';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <CeramicChoice onValueChange={value=>console.info(value)}/>; }
