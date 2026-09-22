import React from 'react';
import VelvetPages from './VelvetPages';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <VelvetPages onValueChange={value=>console.info(value)}/>; }
