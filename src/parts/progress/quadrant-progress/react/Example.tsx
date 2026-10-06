import React from 'react';
import QuadrantProgress from './QuadrantProgress';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <QuadrantProgress onValueChange={value=>console.info(value)}/>; }
