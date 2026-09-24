import React, {useState} from 'react';
import ConstellationRating from './ConstellationRating';
const initial = {
  "label": "この体験を評価する",
  "defaultValue": 3,
  "max": 5,
  "clearable": true
};
export default function Example() {const [value,setValue]=useState(3);return <ConstellationRating {...initial} value={value} onValueChange={setValue} />;}
