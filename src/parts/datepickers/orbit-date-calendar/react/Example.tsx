import React from 'react';
import OrbitDateCalendar from './OrbitDateCalendar';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <OrbitDateCalendar onValueChange={value=>console.info(value)}/>; }
