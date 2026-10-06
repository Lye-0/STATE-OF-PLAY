import React from 'react';
import AnnotationRange from './AnnotationRange';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <AnnotationRange onValueChange={value=>console.info(value)}/>; }
