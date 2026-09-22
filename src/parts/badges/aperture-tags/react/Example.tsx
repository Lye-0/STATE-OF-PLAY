import React from 'react';
import ApertureTags from './ApertureTags';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <ApertureTags onValueChange={value=>console.info(value)}/>; }
