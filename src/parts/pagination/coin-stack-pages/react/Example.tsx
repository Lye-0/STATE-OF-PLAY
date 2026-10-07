import React from 'react';
import CoinStackPages from './CoinStackPages';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <CoinStackPages onValueChange={value=>console.info(value)}/>; }
