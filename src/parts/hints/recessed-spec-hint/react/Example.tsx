import React from 'react';
import RecessedSpecHint from './RecessedSpecHint';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <RecessedSpecHint onValueChange={value=>console.info(value)}/>; }
