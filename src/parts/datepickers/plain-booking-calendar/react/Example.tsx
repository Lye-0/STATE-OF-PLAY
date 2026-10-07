import React from 'react';
import PlainBookingCalendar from './PlainBookingCalendar';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <PlainBookingCalendar onValueChange={value=>console.info(value)}/>; }
