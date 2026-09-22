import React from 'react';
import InsetCalendar from './InsetCalendar';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <InsetCalendar onValueChange={value=>console.info(value)}/>; }
