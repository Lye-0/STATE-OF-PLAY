import React from 'react';
import MercuryCalendar from './MercuryCalendar';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <MercuryCalendar onValueChange={value=>console.info(value)}/>; }
