import React from 'react';
import BindingTag from './BindingTag';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <BindingTag onValueChange={value=>console.info(value)}/>; }
