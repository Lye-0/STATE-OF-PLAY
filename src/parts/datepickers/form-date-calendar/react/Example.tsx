import React from 'react';
import FormDateCalendar from './FormDateCalendar';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <FormDateCalendar onValueChange={value=>console.info(value)}/>; }
