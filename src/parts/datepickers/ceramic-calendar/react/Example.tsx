import React from 'react';
import CeramicCalendar from './CeramicCalendar';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <CeramicCalendar onValueChange={value=>console.info(value)}/>; }
