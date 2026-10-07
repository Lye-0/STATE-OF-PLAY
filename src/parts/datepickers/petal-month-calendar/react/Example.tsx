import React from 'react';
import PetalMonthCalendar from './PetalMonthCalendar';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <PetalMonthCalendar onValueChange={value=>console.info(value)}/>; }
