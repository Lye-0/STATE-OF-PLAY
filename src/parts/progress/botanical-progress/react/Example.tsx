import React from 'react';
import BotanicalProgress from './BotanicalProgress';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <BotanicalProgress onValueChange={value=>console.info(value)}/>; }
