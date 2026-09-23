'use client';
import React,{useState} from 'react';
import NocturneSelect from './NocturneSelect';
const items=[
  {
    "value": "silence",
    "label": "On silence",
    "description": "音のない場所について",
    "badge": "12 min"
  },
  {
    "value": "light",
    "label": "Borrowed light",
    "description": "窓に残る午後の記録",
    "badge": "08 min"
  },
  {
    "value": "cities",
    "label": "Sleeping cities",
    "description": "眠りにつく街の輪郭",
    "badge": "16 min"
  },
  {
    "value": "tides",
    "label": "Between tides",
    "description": "潮のあいだの物語",
    "badge": "10 min"
  }
];
export default function Example(){
 const [value,setValue]=useState(items[0].value);
 return <NocturneSelect label="READING LIST / 夜の短編集" name="choice" items={items} value={value} onValueChange={setValue}/>;
}
