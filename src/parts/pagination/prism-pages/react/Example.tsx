import React from 'react';
import PrismPages from './PrismPages';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <PrismPages onValueChange={value=>console.info(value)}/>; }
