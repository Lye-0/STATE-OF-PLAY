import React from 'react';
import VelvetLoader from './VelvetLoader';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <VelvetLoader onValueChange={value=>console.info(value)}/>; }
