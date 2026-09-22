import React from 'react';
import PrismCalendar from './PrismCalendar';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <PrismCalendar onValueChange={value=>console.info(value)}/>; }
