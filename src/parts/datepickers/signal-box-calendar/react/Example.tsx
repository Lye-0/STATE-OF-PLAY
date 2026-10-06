import React from 'react';
import SignalBoxCalendar from './SignalBoxCalendar';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <SignalBoxCalendar onValueChange={value=>console.info(value)}/>; }
