import React from 'react';
import VelvetRange from './VelvetRange';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <VelvetRange onValueChange={value=>console.info(value)}/>; }
