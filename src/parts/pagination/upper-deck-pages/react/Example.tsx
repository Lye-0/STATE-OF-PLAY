import React from 'react';
import UpperDeckPages from './UpperDeckPages';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <UpperDeckPages onValueChange={value=>console.info(value)}/>; }
