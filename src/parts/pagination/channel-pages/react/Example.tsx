import React from 'react';
import ChannelPages from './ChannelPages';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <ChannelPages onValueChange={value=>console.info(value)}/>; }
