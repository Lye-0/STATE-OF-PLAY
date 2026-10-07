import React from 'react';
import RibbonTicketPages from './RibbonTicketPages';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <RibbonTicketPages onValueChange={value=>console.info(value)}/>; }
