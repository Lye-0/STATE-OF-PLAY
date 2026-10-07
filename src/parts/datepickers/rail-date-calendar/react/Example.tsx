import React from 'react';
import RailDateCalendar from './RailDateCalendar';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <RailDateCalendar onValueChange={value=>console.info(value)}/>; }
