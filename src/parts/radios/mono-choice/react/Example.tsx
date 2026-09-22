import React from 'react';
import MonoChoice from './MonoChoice';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <MonoChoice onValueChange={value=>console.info(value)}/>; }
