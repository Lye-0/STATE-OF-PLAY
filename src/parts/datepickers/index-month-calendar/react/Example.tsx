import React from 'react';
import IndexMonthCalendar from './IndexMonthCalendar';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <IndexMonthCalendar onValueChange={value=>console.info(value)}/>; }
