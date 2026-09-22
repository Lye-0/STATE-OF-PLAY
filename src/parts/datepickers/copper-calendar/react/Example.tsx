import React from 'react';
import CopperCalendar from './CopperCalendar';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <CopperCalendar onValueChange={value=>console.info(value)}/>; }
