import React from 'react';
import ShuttleRange from './ShuttleRange';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <ShuttleRange onValueChange={value=>console.info(value)}/>; }
