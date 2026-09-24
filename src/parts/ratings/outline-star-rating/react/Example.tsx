import React, {useState} from 'react';
import OutlineStarRating from './OutlineStarRating';
const initial = {
  "label": "この体験を評価する",
  "defaultValue": 3,
  "max": 5,
  "clearable": true
};
export default function Example() {const [value,setValue]=useState(3);return <OutlineStarRating {...initial} value={value} onValueChange={setValue} />;}
