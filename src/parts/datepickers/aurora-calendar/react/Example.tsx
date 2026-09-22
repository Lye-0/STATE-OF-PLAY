import React from 'react';
import AuroraCalendar from './AuroraCalendar';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <AuroraCalendar onValueChange={value=>console.info(value)}/>; }
