import React from 'react';
import CompactScheduleCalendar from './CompactScheduleCalendar';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <CompactScheduleCalendar onValueChange={value=>console.info(value)}/>; }
