import React from 'react';
import TideCalendar from './TideCalendar';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <TideCalendar onValueChange={value=>console.info(value)}/>; }
