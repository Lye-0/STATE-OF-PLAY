import React from 'react';
import PlainHelpHint from './PlainHelpHint';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <PlainHelpHint onValueChange={value=>console.info(value)}/>; }
