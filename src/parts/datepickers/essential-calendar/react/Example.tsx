import React from 'react';
import EssentialCalendar from './EssentialCalendar';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <EssentialCalendar onValueChange={value=>console.info(value)}/>; }
