import React from 'react';
import LgcDatepickersLens from './LgcDatepickersLens';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <LgcDatepickersLens onValueChange={value=>console.info(value)}/>; }
