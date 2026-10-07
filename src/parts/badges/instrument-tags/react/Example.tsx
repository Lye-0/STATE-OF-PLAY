import React from 'react';
import InstrumentTags from './InstrumentTags';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <InstrumentTags onValueChange={value=>console.info(value)}/>; }
