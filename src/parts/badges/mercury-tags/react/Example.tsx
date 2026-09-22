import React from 'react';
import MercuryTags from './MercuryTags';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <MercuryTags onValueChange={value=>console.info(value)}/>; }
