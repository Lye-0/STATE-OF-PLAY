import React from 'react';
import LgcPaginationLens from './LgcPaginationLens';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <LgcPaginationLens onValueChange={value=>console.info(value)}/>; }
