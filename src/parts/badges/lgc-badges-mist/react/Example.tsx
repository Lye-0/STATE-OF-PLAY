import React from 'react';
import LgcBadgesMist from './LgcBadgesMist';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <LgcBadgesMist onValueChange={value=>console.info(value)}/>; }
