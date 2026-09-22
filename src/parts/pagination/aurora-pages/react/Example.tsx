import React from 'react';
import AuroraPages from './AuroraPages';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <AuroraPages onValueChange={value=>console.info(value)}/>; }
