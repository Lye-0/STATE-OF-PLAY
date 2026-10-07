import React from 'react';
import WarmMaterialUpload from './WarmMaterialUpload';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <WarmMaterialUpload onValueChange={value=>console.info(value)}/>; }
