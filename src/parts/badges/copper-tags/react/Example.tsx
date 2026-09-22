import React from 'react';
import CopperTags from './CopperTags';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <CopperTags onValueChange={value=>console.info(value)}/>; }
