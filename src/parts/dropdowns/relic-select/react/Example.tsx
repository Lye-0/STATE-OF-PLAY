'use client';
import React,{useState} from 'react';
import RelicSelect from './RelicSelect';
const items=[
  {
    "value": "compass",
    "label": "Survey compass",
    "description": "真鍮、測量の記録",
    "icon": "01",
    "badge": "1894"
  },
  {
    "value": "lens",
    "label": "Field lens",
    "description": "光学ガラス、傷のある縁",
    "icon": "02",
    "badge": "1912"
  },
  {
    "value": "key",
    "label": "Workshop key",
    "description": "鍛鉄、手磨きの痕跡",
    "icon": "03",
    "badge": "1928"
  },
  {
    "value": "dial",
    "label": "Marine dial",
    "description": "エナメル、航海の時間",
    "icon": "04",
    "badge": "1936"
  }
];
export default function Example(){
 const [value,setValue]=useState(items[0].value);
 return <RelicSelect label="CABINET / 収蔵品" name="choice" items={items} value={value} onValueChange={setValue}/>;
}
