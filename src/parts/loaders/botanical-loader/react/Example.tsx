import React from 'react';
import BotanicalLoader from './BotanicalLoader';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <BotanicalLoader onValueChange={value=>console.info(value)}/>; }
