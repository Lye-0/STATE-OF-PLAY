import React from 'react';
import PlainQuantityNumber from './PlainQuantityNumber';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <PlainQuantityNumber onValueChange={value=>console.info(value)}/>; }
