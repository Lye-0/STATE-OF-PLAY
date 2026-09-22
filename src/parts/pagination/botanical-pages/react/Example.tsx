import React from 'react';
import BotanicalPages from './BotanicalPages';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <BotanicalPages onValueChange={value=>console.info(value)}/>; }
