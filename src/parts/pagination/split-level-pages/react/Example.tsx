import React from 'react';
import SplitLevelPages from './SplitLevelPages';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <SplitLevelPages onValueChange={value=>console.info(value)}/>; }
