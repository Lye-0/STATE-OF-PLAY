import React from 'react';
import FoldedMonthCalendar from './FoldedMonthCalendar';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <FoldedMonthCalendar onValueChange={value=>console.info(value)}/>; }
