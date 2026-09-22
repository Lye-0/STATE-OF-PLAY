import React from 'react';
import BotanicalDropzone from './BotanicalDropzone';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <BotanicalDropzone onValueChange={value=>console.info(value)}/>; }
