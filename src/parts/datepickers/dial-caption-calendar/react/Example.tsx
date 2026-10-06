import React from 'react';
import DialCaptionCalendar from './DialCaptionCalendar';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <DialCaptionCalendar onValueChange={value=>console.info(value)}/>; }
