import React from 'react';
import BotanicalCalendar from './BotanicalCalendar';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <BotanicalCalendar onValueChange={value=>console.info(value)}/>; }
