import React from 'react';
import SoftContextHint from './SoftContextHint';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <SoftContextHint onValueChange={value=>console.info(value)}/>; }
