import React from 'react';
import SoftPreferenceRange from './SoftPreferenceRange';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <SoftPreferenceRange onValueChange={value=>console.info(value)}/>; }
