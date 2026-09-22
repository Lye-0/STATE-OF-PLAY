import React from 'react';
import FolioCalendar from './FolioCalendar';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <FolioCalendar onValueChange={value=>console.info(value)}/>; }
