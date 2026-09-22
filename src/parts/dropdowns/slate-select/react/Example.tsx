'use client';
import React,{useState} from 'react';
import SlateSelect from './SlateSelect';
const items=[
  {
    "value": "personal",
    "label": "Personal",
    "description": "自分だけの作業スペース",
    "icon": "P",
    "badge": "1"
  },
  {
    "value": "design",
    "label": "Design team",
    "description": "チームで共有する場所",
    "icon": "D",
    "badge": "8"
  },
  {
    "value": "archive",
    "label": "Archive",
    "description": "完成したプロジェクト",
    "icon": "A",
    "badge": "24"
  }
];
export default function Example(){
 const [value,setValue]=useState(items[0].value);
 return <SlateSelect label="WORKSPACE / ワークスペース" name="choice" items={items} value={value} onValueChange={setValue}/>;
}
