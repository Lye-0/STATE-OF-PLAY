import React from 'react';
import CompactListChoice from './CompactListChoice';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <CompactListChoice onValueChange={value=>console.info(value)}/>; }
