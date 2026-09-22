import React from 'react';
import InsetProgress from './InsetProgress';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <InsetProgress onValueChange={value=>console.info(value)}/>; }
