import React from 'react';
import LetterpressTags from './LetterpressTags';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <LetterpressTags onValueChange={value=>console.info(value)}/>; }
