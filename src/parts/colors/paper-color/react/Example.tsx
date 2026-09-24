import React, {useState} from 'react';
import PaperColor from './PaperColor';
const initial = {
  "label": "Color study",
  "defaultValue": "#A5BCE0",
  "palette": [
    "#A5BCE0",
    "#BCACCF",
    "#E0B494",
    "#B8CCAE",
    "#E5DBBF",
    "#26394B"
  ]
};
export default function Example() {const [value,setValue]=useState('#A5BCE0');return <PaperColor {...initial} value={value} onValueChange={setValue} />;}
