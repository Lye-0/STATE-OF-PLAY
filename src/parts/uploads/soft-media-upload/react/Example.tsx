import React from 'react';
import SoftMediaUpload from './SoftMediaUpload';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <SoftMediaUpload onValueChange={value=>console.info(value)}/>; }
