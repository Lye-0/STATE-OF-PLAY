import React from 'react';
import AppointmentCardCalendar from './AppointmentCardCalendar';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <AppointmentCardCalendar onValueChange={value=>console.info(value)}/>; }
