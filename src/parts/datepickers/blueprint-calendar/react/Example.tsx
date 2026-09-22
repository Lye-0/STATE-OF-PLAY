import React from 'react';
import BlueprintCalendar from './BlueprintCalendar';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <BlueprintCalendar onValueChange={value=>console.info(value)}/>; }
