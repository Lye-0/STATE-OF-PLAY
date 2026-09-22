import React from 'react';
import SoftCalendar from './SoftCalendar';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <SoftCalendar onValueChange={value=>console.info(value)}/>; }
