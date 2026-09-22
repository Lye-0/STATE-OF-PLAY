import React from 'react';
import OutlineCalendar from './OutlineCalendar';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <OutlineCalendar onValueChange={value=>console.info(value)}/>; }
