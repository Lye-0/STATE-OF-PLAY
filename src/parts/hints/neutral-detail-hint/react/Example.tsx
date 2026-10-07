import React from 'react';
import NeutralDetailHint from './NeutralDetailHint';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <NeutralDetailHint onValueChange={value=>console.info(value)}/>; }
