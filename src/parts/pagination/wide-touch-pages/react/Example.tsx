import React from 'react';
import WideTouchPages from './WideTouchPages';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <WideTouchPages onValueChange={value=>console.info(value)}/>; }
