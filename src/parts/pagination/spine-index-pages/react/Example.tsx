import React from 'react';
import SpineIndexPages from './SpineIndexPages';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <SpineIndexPages onValueChange={value=>console.info(value)}/>; }
