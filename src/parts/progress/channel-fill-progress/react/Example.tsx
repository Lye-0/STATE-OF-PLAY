import React from 'react';
import ChannelFillProgress from './ChannelFillProgress';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <ChannelFillProgress onValueChange={value=>console.info(value)}/>; }
