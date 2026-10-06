import React from 'react';
import ChamferedTag from './ChamferedTag';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <ChamferedTag onValueChange={value=>console.info(value)}/>; }
