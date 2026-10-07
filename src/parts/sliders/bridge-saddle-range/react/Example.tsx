import React from 'react';
import BridgeSaddleRange from './BridgeSaddleRange';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <BridgeSaddleRange onValueChange={value=>console.info(value)}/>; }
