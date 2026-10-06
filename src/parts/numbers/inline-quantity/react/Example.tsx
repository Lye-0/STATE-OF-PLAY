import React from 'react';
import InlineQuantity from './InlineQuantity';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <InlineQuantity onValueChange={value=>console.info(value)}/>; }
