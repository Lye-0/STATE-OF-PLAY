import React from 'react';
import OutlinePages from './OutlinePages';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <OutlinePages onValueChange={value=>console.info(value)}/>; }
