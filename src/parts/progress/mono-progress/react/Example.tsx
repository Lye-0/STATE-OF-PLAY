import React from 'react';
import MonoProgress from './MonoProgress';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <MonoProgress onValueChange={value=>console.info(value)}/>; }
