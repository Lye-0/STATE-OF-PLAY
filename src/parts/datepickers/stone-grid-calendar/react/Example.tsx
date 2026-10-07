import React from 'react';
import StoneGridCalendar from './StoneGridCalendar';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <StoneGridCalendar onValueChange={value=>console.info(value)}/>; }
