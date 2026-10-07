import React from 'react';
import AnnotationLeafHint from './AnnotationLeafHint';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <AnnotationLeafHint onValueChange={value=>console.info(value)}/>; }
