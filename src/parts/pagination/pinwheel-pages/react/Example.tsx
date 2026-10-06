import React from 'react';
import PinwheelPages from './PinwheelPages';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <PinwheelPages onValueChange={value=>console.info(value)}/>; }
