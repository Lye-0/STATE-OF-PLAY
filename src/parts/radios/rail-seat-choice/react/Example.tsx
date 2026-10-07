import React from 'react';
import RailSeatChoice from './RailSeatChoice';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <RailSeatChoice onValueChange={value=>console.info(value)}/>; }
