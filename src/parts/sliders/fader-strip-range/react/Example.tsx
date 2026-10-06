import React from 'react';
import FaderStripRange from './FaderStripRange';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <FaderStripRange onValueChange={value=>console.info(value)}/>; }
