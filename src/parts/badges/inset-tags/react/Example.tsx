import React from 'react';
import InsetTags from './InsetTags';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <InsetTags onValueChange={value=>console.info(value)}/>; }
