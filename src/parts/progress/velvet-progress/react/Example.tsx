import React from 'react';
import VelvetProgress from './VelvetProgress';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <VelvetProgress onValueChange={value=>console.info(value)}/>; }
