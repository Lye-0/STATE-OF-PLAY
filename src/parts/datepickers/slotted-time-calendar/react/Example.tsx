import React from 'react';
import SlottedTimeCalendar from './SlottedTimeCalendar';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <SlottedTimeCalendar onValueChange={value=>console.info(value)}/>; }
