import React from 'react';
import CaliperJawRange from './CaliperJawRange';
/** The callback is an integration point; this example never persists or sends data. */
export default function Example() { return <CaliperJawRange onValueChange={value=>console.info(value)}/>; }
