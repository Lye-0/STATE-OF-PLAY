import React from 'react';
import BookmarkRouteTrail from './BookmarkRouteTrail';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <BookmarkRouteTrail onValueChange={value=>console.info(value)}/>; }
