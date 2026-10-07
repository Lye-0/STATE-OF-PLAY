import React from 'react';
import FolioBandUpload from './FolioBandUpload';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <FolioBandUpload onValueChange={value=>console.info(value)}/>; }
