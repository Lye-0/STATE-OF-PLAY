import React from 'react';
import BookendCounter from './BookendCounter';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <BookendCounter onValueChange={value=>console.info(value)}/>; }
