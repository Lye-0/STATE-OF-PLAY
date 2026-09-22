import React from 'react';
import SoftPages from './SoftPages';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <SoftPages onValueChange={value=>console.info(value)}/>; }
