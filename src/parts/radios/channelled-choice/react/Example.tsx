import React from 'react';
import ChannelledChoice from './ChannelledChoice';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <ChannelledChoice onValueChange={value=>console.info(value)}/>; }
