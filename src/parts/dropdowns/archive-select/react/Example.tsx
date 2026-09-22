'use client';
import React,{useState} from 'react';
import ArchiveSelect from './ArchiveSelect';
const items=[
  {
    "value": "notes",
    "label": "Field notes",
    "description": "歩いて集めた場所の記録",
    "icon": "A",
    "badge": "12 FILES"
  },
  {
    "value": "sketch",
    "label": "Sketchbook",
    "description": "輪郭と、まだ形のない案",
    "icon": "B",
    "badge": "08 FILES"
  },
  {
    "value": "materials",
    "label": "Material studies",
    "description": "色・重さ・手触りの調査",
    "icon": "C",
    "badge": "24 FILES"
  },
  {
    "value": "essays",
    "label": "Collected essays",
    "description": "暮らしと設計について",
    "icon": "D",
    "badge": "06 FILES"
  }
];
export default function Example(){
 const [value,setValue]=useState(items[0].value);
 return <ArchiveSelect label="COLLECTION / 資料室" name="choice" items={items} value={value} onValueChange={setValue}/>;
}
