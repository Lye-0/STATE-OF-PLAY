import React from 'react';
import OpenJawNumber from './OpenJawNumber';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <OpenJawNumber onValueChange={value=>console.info(value)}/>; }
