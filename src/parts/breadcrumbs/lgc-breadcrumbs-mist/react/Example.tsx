import React from 'react';
import LgcBreadcrumbsMist from './LgcBreadcrumbsMist';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <LgcBreadcrumbsMist onValueChange={value=>console.info(value)}/>; }
