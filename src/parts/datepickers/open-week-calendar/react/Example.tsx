import React from 'react';
import OpenWeekCalendar from './OpenWeekCalendar';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <OpenWeekCalendar onValueChange={value=>console.info(value)}/>; }
