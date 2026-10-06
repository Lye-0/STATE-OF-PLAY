import React from 'react';
import TicketRollPages from './TicketRollPages';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <TicketRollPages onValueChange={value=>console.info(value)}/>; }
