import React from 'react';
import RecessedDateCalendar from './RecessedDateCalendar';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <RecessedDateCalendar onValueChange={value=>console.info(value)}/>; }
