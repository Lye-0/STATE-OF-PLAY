import React from 'react';
import SlateCalendar from './SlateCalendar';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <SlateCalendar onValueChange={value=>console.info(value)}/>; }
