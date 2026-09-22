import React from 'react';
import MonoLoader from './MonoLoader';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <MonoLoader onValueChange={value=>console.info(value)}/>; }
