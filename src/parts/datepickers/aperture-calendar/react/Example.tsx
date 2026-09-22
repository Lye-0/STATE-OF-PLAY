import React from 'react';
import ApertureCalendar from './ApertureCalendar';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <ApertureCalendar onValueChange={value=>console.info(value)}/>; }
