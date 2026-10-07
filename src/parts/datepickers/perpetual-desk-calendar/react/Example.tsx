import React from 'react';
import PerpetualDeskCalendar from './PerpetualDeskCalendar';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <PerpetualDeskCalendar onValueChange={value=>console.info(value)}/>; }
