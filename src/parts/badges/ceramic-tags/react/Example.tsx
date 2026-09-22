import React from 'react';
import CeramicTags from './CeramicTags';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <CeramicTags onValueChange={value=>console.info(value)}/>; }
