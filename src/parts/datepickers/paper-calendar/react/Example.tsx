import React from 'react';
import PaperCalendar from './PaperCalendar';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <PaperCalendar onValueChange={value=>console.info(value)}/>; }
