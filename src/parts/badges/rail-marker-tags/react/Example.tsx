import React from 'react';
import RailMarkerTags from './RailMarkerTags';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <RailMarkerTags onValueChange={value=>console.info(value)}/>; }
