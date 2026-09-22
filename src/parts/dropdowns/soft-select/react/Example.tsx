'use client';
import React,{useState} from 'react';
import SoftSelect from './SoftSelect';
const items=[
  {
    "value": "low",
    "label": "Low",
    "description": "余裕のあるときに",
    "icon": "L",
    "badge": "01"
  },
  {
    "value": "normal",
    "label": "Normal",
    "description": "普段どおり進める",
    "icon": "N",
    "badge": "02"
  },
  {
    "value": "high",
    "label": "High",
    "description": "優先して取り組む",
    "icon": "H",
    "badge": "03"
  }
];
export default function Example(){
 const [value,setValue]=useState(items[0].value);
 return <SoftSelect label="PRIORITY / 優先度" name="choice" items={items} value={value} onValueChange={setValue}/>;
}
