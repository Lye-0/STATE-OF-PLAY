import React from 'react';
import PlainFormChoice from './PlainFormChoice';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <PlainFormChoice onValueChange={value=>console.info(value)}/>; }
