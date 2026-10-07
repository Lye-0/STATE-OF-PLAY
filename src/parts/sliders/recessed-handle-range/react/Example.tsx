import React from 'react';
import RecessedHandleRange from './RecessedHandleRange';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <RecessedHandleRange onValueChange={value=>console.info(value)}/>; }
