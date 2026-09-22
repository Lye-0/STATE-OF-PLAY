import React from 'react';
import MonoRange from './MonoRange';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <MonoRange onValueChange={value=>console.info(value)}/>; }
