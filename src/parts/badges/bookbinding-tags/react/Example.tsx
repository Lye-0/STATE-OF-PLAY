import React from 'react';
import BookbindingTags from './BookbindingTags';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <BookbindingTags onValueChange={value=>console.info(value)}/>; }
