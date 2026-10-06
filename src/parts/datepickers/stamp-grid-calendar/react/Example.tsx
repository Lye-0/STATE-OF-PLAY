import React from 'react';
import StampGridCalendar from './StampGridCalendar';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <StampGridCalendar onValueChange={value=>console.info(value)}/>; }
