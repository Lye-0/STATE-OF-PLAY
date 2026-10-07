import React from 'react';
import LibraryDrawerChoice from './LibraryDrawerChoice';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <LibraryDrawerChoice onValueChange={value=>console.info(value)}/>; }
