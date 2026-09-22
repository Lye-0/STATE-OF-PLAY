import React from 'react';
import RelayTags from './RelayTags';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <RelayTags onValueChange={value=>console.info(value)}/>; }
