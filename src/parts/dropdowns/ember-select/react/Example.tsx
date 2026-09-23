'use client';
import React,{useState} from 'react';
import EmberSelect from './EmberSelect';
const items=[
  {
    "value": "light",
    "label": "Light roast",
    "description": "果実の明るさを残して",
    "badge": "196 °C"
  },
  {
    "value": "medium",
    "label": "Medium roast",
    "description": "甘みと香りの交わる点",
    "badge": "210 °C"
  },
  {
    "value": "dark",
    "label": "Dark roast",
    "description": "深いコクと、長い余韻",
    "badge": "225 °C"
  },
  {
    "value": "decaf",
    "label": "Decaf blend",
    "description": "夜の一杯にも、豊かな味",
    "badge": "205 °C"
  }
];
export default function Example(){
 const [value,setValue]=useState(items[0].value);
 return <EmberSelect label="ROAST PROFILE / 焙煎度" name="choice" items={items} value={value} onValueChange={setValue}/>;
}
