import React from 'react';
import LgcRadiosLens from './LgcRadiosLens';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <LgcRadiosLens onValueChange={value=>console.info(value)}/>; }
