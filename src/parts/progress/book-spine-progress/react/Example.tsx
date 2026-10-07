import React from 'react';
import BookSpineProgress from './BookSpineProgress';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <BookSpineProgress onValueChange={value=>console.info(value)}/>; }
