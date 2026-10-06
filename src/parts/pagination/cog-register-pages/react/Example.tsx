import React from 'react';
import CogRegisterPages from './CogRegisterPages';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <CogRegisterPages onValueChange={value=>console.info(value)}/>; }
