import React from 'react';
import EssentialTags from './EssentialTags';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <EssentialTags onValueChange={value=>console.info(value)}/>; }
