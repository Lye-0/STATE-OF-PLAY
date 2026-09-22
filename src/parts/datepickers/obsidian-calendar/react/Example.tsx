import React from 'react';
import ObsidianCalendar from './ObsidianCalendar';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <ObsidianCalendar onValueChange={value=>console.info(value)}/>; }
