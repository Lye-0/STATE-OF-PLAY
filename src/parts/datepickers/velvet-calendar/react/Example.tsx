import React from 'react';
import VelvetCalendar from './VelvetCalendar';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <VelvetCalendar onValueChange={value=>console.info(value)}/>; }
