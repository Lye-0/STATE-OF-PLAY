import React from 'react';
import BookmarkQueryFinder from './BookmarkQueryFinder';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <BookmarkQueryFinder onValueChange={value=>console.info(value)}/>; }
