import React from 'react';
import VelvetChoice from './VelvetChoice';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <VelvetChoice onValueChange={value=>console.info(value)}/>; }
