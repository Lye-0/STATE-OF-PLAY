import React from 'react';
import CalendarPlacket from './CalendarPlacket';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <CalendarPlacket onValueChange={value=>console.info(value)}/>; }
