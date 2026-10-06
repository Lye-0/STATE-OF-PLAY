import React from 'react';
import CondensedPages from './CondensedPages';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <CondensedPages onValueChange={value=>console.info(value)}/>; }
