import React from 'react';
import LgcDatepickersMist from './LgcDatepickersMist';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <LgcDatepickersMist onValueChange={value=>console.info(value)}/>; }
