import React from 'react';
import GutterTrail from './GutterTrail';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <GutterTrail onValueChange={value=>console.info(value)}/>; }
