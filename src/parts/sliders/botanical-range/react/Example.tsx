import React from 'react';
import BotanicalRange from './BotanicalRange';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <BotanicalRange onValueChange={value=>console.info(value)}/>; }
