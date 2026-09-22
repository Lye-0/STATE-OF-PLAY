import React from 'react';
import MonoPopover from './MonoPopover';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <MonoPopover onValueChange={value=>console.info(value)}/>; }
