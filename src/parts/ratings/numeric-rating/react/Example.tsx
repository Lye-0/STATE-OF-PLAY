import React, {useState} from 'react';
import NumericRating from './NumericRating';
const initial = {
  "label": "この体験を評価する",
  "defaultValue": 3,
  "max": 5,
  "clearable": true
};
export default function Example() {const [value,setValue]=useState(3);return <NumericRating {...initial} value={value} onValueChange={setValue} />;}
