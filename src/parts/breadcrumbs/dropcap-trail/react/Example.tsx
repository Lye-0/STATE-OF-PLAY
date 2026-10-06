import React from 'react';
import DropcapTrail from './DropcapTrail';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <DropcapTrail onValueChange={value=>console.info(value)}/>; }
