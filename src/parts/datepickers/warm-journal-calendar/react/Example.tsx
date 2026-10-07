import React from 'react';
import WarmJournalCalendar from './WarmJournalCalendar';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <WarmJournalCalendar onValueChange={value=>console.info(value)}/>; }
