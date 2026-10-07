import React from 'react';
import StackedDiscRange from './StackedDiscRange';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <StackedDiscRange onValueChange={value=>console.info(value)}/>; }
