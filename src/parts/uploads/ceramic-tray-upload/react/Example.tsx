import React from 'react';
import CeramicTrayUpload from './CeramicTrayUpload';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <CeramicTrayUpload onValueChange={value=>console.info(value)}/>; }
