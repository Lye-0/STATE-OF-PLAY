import React from 'react';
import LgcPaginationMist from './LgcPaginationMist';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <LgcPaginationMist onValueChange={value=>console.info(value)}/>; }
