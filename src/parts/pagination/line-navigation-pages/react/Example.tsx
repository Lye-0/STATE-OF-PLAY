import React from 'react';
import LineNavigationPages from './LineNavigationPages';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <LineNavigationPages onValueChange={value=>console.info(value)}/>; }
