import React, {useState} from 'react';
import LeafletRating from './LeafletRating';
const initial = {
  "label": "この体験を評価する",
  "defaultValue": 3,
  "max": 5,
  "clearable": true
};
export default function Example() {const [value,setValue]=useState(3);return <LeafletRating {...initial} value={value} onValueChange={setValue} />;}
