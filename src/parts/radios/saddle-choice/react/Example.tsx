import React from 'react';
import SaddleChoice from './SaddleChoice';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <SaddleChoice onValueChange={value=>console.info(value)}/>; }
