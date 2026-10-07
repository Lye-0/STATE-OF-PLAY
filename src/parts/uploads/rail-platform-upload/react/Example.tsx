import React from 'react';
import RailPlatformUpload from './RailPlatformUpload';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <RailPlatformUpload onValueChange={value=>console.info(value)}/>; }
