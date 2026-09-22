import React from 'react';
import NixieCalendar from './NixieCalendar';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <NixieCalendar onValueChange={value=>console.info(value)}/>; }
