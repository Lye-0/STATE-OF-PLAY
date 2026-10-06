import React from 'react';
import SteppedDateCalendar from './SteppedDateCalendar';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <SteppedDateCalendar onValueChange={value=>console.info(value)}/>; }
