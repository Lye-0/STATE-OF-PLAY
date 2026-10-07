import React from 'react';
import SoftReadingPages from './SoftReadingPages';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <SoftReadingPages onValueChange={value=>console.info(value)}/>; }
