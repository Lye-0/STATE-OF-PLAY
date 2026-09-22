import React from 'react';
import BotanicalChoice from './BotanicalChoice';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <BotanicalChoice onValueChange={value=>console.info(value)}/>; }
