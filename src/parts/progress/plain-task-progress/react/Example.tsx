import React from 'react';
import PlainTaskProgress from './PlainTaskProgress';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <PlainTaskProgress onValueChange={value=>console.info(value)}/>; }
