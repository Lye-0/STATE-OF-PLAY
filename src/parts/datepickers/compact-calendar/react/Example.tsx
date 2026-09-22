import React from 'react';
import CompactCalendar from './CompactCalendar';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <CompactCalendar onValueChange={value=>console.info(value)}/>; }
