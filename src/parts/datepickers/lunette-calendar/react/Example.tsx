import React from 'react';
import LunetteCalendar from './LunetteCalendar';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <LunetteCalendar onValueChange={value=>console.info(value)}/>; }
