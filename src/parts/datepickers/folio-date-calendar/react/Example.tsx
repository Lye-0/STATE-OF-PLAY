import React from 'react';
import FolioDateCalendar from './FolioDateCalendar';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <FolioDateCalendar onValueChange={value=>console.info(value)}/>; }
