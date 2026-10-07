import React from 'react';
import WarmCategoryTags from './WarmCategoryTags';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <WarmCategoryTags onValueChange={value=>console.info(value)}/>; }
