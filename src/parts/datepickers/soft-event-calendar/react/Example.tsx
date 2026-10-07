import React from 'react';
import SoftEventCalendar from './SoftEventCalendar';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <SoftEventCalendar onValueChange={value=>console.info(value)}/>; }
