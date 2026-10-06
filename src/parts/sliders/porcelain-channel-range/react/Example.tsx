import React from 'react';
import PorcelainChannelRange from './PorcelainChannelRange';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <PorcelainChannelRange onValueChange={value=>console.info(value)}/>; }
