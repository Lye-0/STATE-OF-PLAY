import React from 'react';
import TwoLeafCalendar from './TwoLeafCalendar';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <TwoLeafCalendar onValueChange={value=>console.info(value)}/>; }
